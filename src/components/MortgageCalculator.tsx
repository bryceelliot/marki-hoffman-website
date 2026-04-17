'use client'

import { useState, useMemo } from 'react'

export default function MortgageCalculator() {
  const [price, setPrice] = useState(750000)
  const [downPercent, setDownPercent] = useState(20)
  const [rate, setRate] = useState(5.25)
  const [amortization, setAmortization] = useState(25)
  const [frequency, setFrequency] = useState<'monthly' | 'biweekly' | 'weekly'>('monthly')

  const results = useMemo(() => {
    const down = price * (downPercent / 100)
    const principal = price - down

    // CMHC insurance premium
    let cmhcRate = 0
    if (downPercent < 20) {
      if (downPercent < 10) cmhcRate = 0.031
      else if (downPercent < 15) cmhcRate = 0.028
      else cmhcRate = 0.024
    }
    const cmhc = downPercent < 20 ? principal * cmhcRate : 0
    const insuredPrincipal = principal + cmhc

    const periodsPerYear = frequency === 'monthly' ? 12 : frequency === 'biweekly' ? 26 : 52
    const r = rate / 100 / periodsPerYear
    const n = amortization * periodsPerYear

    const payment = r === 0 ? insuredPrincipal / n : insuredPrincipal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPaid = payment * n
    const totalInterest = totalPaid - insuredPrincipal

    return { down, principal, cmhc, insuredPrincipal, payment, totalPaid, totalInterest, periodsPerYear }
  }, [price, downPercent, rate, amortization, frequency])

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString()
  const labelMap = { monthly: '/mo', biweekly: '/2 wks', weekly: '/wk' }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#222222]">Home Price</label>
            <span className="text-sm font-semibold text-[#1F6B5F]">{fmt(price)}</span>
          </div>
          <input type="range" min={200000} max={3000000} step={25000} value={price}
            onChange={e => setPrice(+e.target.value)}
            className="w-full accent-[#1F6B5F]" />
          <div className="flex justify-between text-xs text-[#6a6a6a] mt-1">
            <span>$200K</span><span>$3M</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#222222]">Down Payment</label>
            <span className="text-sm font-semibold text-[#1F6B5F]">{downPercent}% — {fmt(price * downPercent / 100)}</span>
          </div>
          <input type="range" min={5} max={50} step={1} value={downPercent}
            onChange={e => setDownPercent(+e.target.value)}
            className="w-full accent-[#1F6B5F]" />
          <div className="flex justify-between text-xs text-[#6a6a6a] mt-1">
            <span>5%</span><span>50%</span>
          </div>
          {downPercent < 20 && (
            <p className="text-xs text-amber-600 mt-1.5">CMHC mortgage insurance applies when down payment is under 20%</p>
          )}
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#222222]">Interest Rate</label>
            <span className="text-sm font-semibold text-[#1F6B5F]">{rate.toFixed(2)}%</span>
          </div>
          <input type="range" min={2} max={9} step={0.05} value={rate}
            onChange={e => setRate(+e.target.value)}
            className="w-full accent-[#1F6B5F]" />
          <div className="flex justify-between text-xs text-[#6a6a6a] mt-1">
            <span>2%</span><span>9%</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-[#222222]">Amortization</label>
            <span className="text-sm font-semibold text-[#1F6B5F]">{amortization} years</span>
          </div>
          <input type="range" min={5} max={30} step={5} value={amortization}
            onChange={e => setAmortization(+e.target.value)}
            className="w-full accent-[#1F6B5F]" />
          <div className="flex justify-between text-xs text-[#6a6a6a] mt-1">
            <span>5 yrs</span><span>30 yrs</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[#222222] block mb-2">Payment Frequency</label>
          <div className="grid grid-cols-3 gap-2">
            {(['monthly', 'biweekly', 'weekly'] as const).map(f => (
              <button key={f} onClick={() => setFrequency(f)}
                className={`py-2 rounded-lg text-sm font-medium transition-colors capitalize ${frequency === f ? 'bg-[#1F6B5F] text-white' : 'bg-[#f7f7f7] text-[#6a6a6a] hover:bg-[#e4f0ed]'}`}>
                {f === 'biweekly' ? 'Bi-Weekly' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="bg-[#1F6B5F] rounded-[20px] p-7 text-white text-center">
          <p className="text-sm text-white/80 mb-1">Your {frequency === 'biweekly' ? 'Bi-Weekly' : frequency.charAt(0).toUpperCase() + frequency.slice(1)} Payment</p>
          <p className="text-5xl font-bold mb-1">{fmt(results.payment)}</p>
          <p className="text-sm text-white/70">{labelMap[frequency]}</p>
        </div>

        <div className="bg-[#f7f7f7] rounded-[20px] p-6 space-y-3">
          {[
            { label: 'Home Price', value: fmt(price) },
            { label: 'Down Payment', value: `${fmt(results.down)} (${downPercent}%)` },
            { label: 'Mortgage Amount', value: fmt(results.principal) },
            ...(results.cmhc > 0 ? [{ label: 'CMHC Insurance', value: fmt(results.cmhc) }] : []),
            { label: 'Total Interest Paid', value: fmt(results.totalInterest) },
            { label: 'Total Cost', value: fmt(results.totalPaid + results.down) },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-[#6a6a6a]">{label}</span>
              <span className="font-semibold text-[#222222]">{value}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#6a6a6a] text-center px-2">
          This calculator provides estimates only. Contact a mortgage broker for a personalized quote. Rates and rules change frequently.
        </p>
      </div>
    </div>
  )
}
