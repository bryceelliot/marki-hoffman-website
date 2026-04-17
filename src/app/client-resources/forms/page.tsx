import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone, FileText, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Forms & Documents — Kelowna BC',
  description: 'Plain-language explanations of common BC real estate documents — purchase contracts, strata documents, property transfer tax, and more.',
}

const documents = [
  {
    title: 'Contract of Purchase and Sale (CPS)',
    category: 'Buying & Selling',
    description: `The Contract of Purchase and Sale is the legally binding agreement between buyer and seller. It covers every detail of the transaction: price, deposit amount and due date, subject conditions, included items (fixtures and chattels), completion date, possession date, and adjustment date.

Once signed by both parties and all subjects are removed, this document is firm. It's enforced in BC courts. Never sign one without understanding every clause — that's what I'm here for.`,
    keyTerms: [
      'Completion Date — when money and title transfer at the Land Title Office',
      'Possession Date — when you get the keys (usually 1 day after completion)',
      'Subject Conditions — contingencies that must be satisfied before the deal is firm',
      'Included Items — appliances, window coverings, fixtures that convey with the property',
      'Deposit — held in trust by brokerage; forfeited if buyer defaults without valid reason',
    ],
  },
  {
    title: 'Subject Removal',
    category: 'Buying & Selling',
    description: `Subject conditions protect the buyer. Common subjects include: "subject to financing" (the buyer must secure their mortgage), "subject to inspection" (the buyer must be satisfied with a home inspection), and "subject to strata document review" (for condos/townhomes).

When all conditions are satisfied, the buyer signs a Subject Removal form and the deal becomes firm. At this point, the buyer's deposit is typically due (if not already paid), and neither party can back out without legal consequences.

Never remove subjects under pressure. If your financing isn't 100% confirmed or you haven't reviewed the inspection, keep your subjects in place.`,
    keyTerms: [
      'Subject to Financing — lender must formally approve the mortgage',
      'Subject to Inspection — buyer must be satisfied with a qualified inspector\'s report',
      'Subject to Strata Documents — buyer reviews minutes, depreciation report, financials, bylaws',
      'Waiving Subjects — removing conditions without satisfaction is a significant legal risk',
    ],
  },
  {
    title: 'Strata Documents',
    category: 'Condos & Townhomes',
    description: `If you're buying a condo or townhome in a strata corporation, you'll receive a package of documents that must be reviewed carefully before removing subjects. This typically includes:

The strata plan (physical layout), bylaws and rules, recent AGM and SGM minutes (typically 2 years), Form B (certificate of strata), depreciation report (capital reserve study), insurance certificate, and financial statements.

Look for: special levies that are pending (extra charges for repairs), evidence of disputes or litigation, contingency reserve fund balance (is the strata well-funded?), and any pet, rental, or age restrictions.`,
    keyTerms: [
      'Form B — discloses monthly fees, any arrears, and known upcoming costs',
      'Contingency Reserve Fund (CRF) — strata\'s savings for major repairs; low CRF = risk',
      'Special Levy — one-time assessment charged to all owners for major repairs/upgrades',
      'Depreciation Report — engineering study of the building\'s major components and future costs',
      'Bylaws — rules governing use of the property; check pets, rentals, age restrictions',
    ],
  },
  {
    title: 'Property Disclosure Statement (PDS)',
    category: 'Buying & Selling',
    description: `The Property Disclosure Statement is completed by the seller and discloses known defects, issues, and material facts about the property. In BC, sellers are legally required to disclose any known latent defects (hidden issues that aren't visible on inspection).

Typical disclosures include: whether the property has had water damage, mold, structural issues, insurance claims, grow-ops, or neighborhood disputes. The PDS is not a warranty — it's based on the seller's knowledge and must be read carefully.

If the seller is unaware of an issue, they can't disclose it. This is why home inspections remain essential even when a PDS shows no concerns.`,
    keyTerms: [
      'Latent Defect — hidden defect not discoverable on reasonable inspection; seller must disclose',
      'Patent Defect — visible defect a buyer can see themselves; seller has less obligation',
      'Material Fact — any information that would affect a buyer\'s decision to purchase',
      'As-Is — seller accepts no responsibility for condition; buyer takes property in current state',
    ],
  },
  {
    title: 'Property Transfer Tax (PTT)',
    category: 'Buying',
    description: `Property Transfer Tax is a BC provincial tax paid by buyers on the transfer of real estate. The rates are:

1% on the first $200,000 of fair market value
2% on the portion from $200,001 to $2,000,000
3% on the portion above $2,000,000
5% additional on the portion above $3,000,000 for residential properties

Example: on a $750,000 purchase, PTT = $2,000 + $11,000 = $13,000.

First-time buyers are fully exempt on homes up to $500,000 and receive a partial exemption on homes from $500,001 to $525,000. Newly built homes may also qualify for exemptions — consult your lawyer.`,
    keyTerms: [
      'FTB Exemption — full PTT exemption for first-time buyers on homes under $500K',
      'New Home Exemption — available on qualifying newly built homes',
      'Foreign Buyer Tax — additional 20% tax applies to foreign nationals in certain regions',
      'Due at Completion — PTT is paid through your lawyer on the completion date',
    ],
  },
  {
    title: 'Title & Title Insurance',
    category: 'Buying',
    description: `Title is the legal right to own a property. When you buy, a title search is conducted by your lawyer at the BC Land Title Office to ensure the seller has clean, unencumbered ownership to transfer to you.

Title insurance (approximately $200–$400) protects you against problems with title that weren't caught in the search — such as fraudulent previous owners, survey errors, unpaid liens, or encroachments. It's a one-time premium paid at closing and is highly recommended in BC.

Your lawyer will also review any registered charges, easements, rights-of-way, or covenants on the title — these can affect what you can do with the property.`,
    keyTerms: [
      'Clear Title — no liens, mortgages, or claims against the property',
      'Encumbrance — a registered interest on title (mortgage, lien, easement)',
      'Easement — a right for someone else to use part of your property (e.g. utility corridor)',
      'Covenant — a restriction on how the land can be used',
      'Title Insurance — one-time policy protecting against title defects not found in search',
    ],
  },
]

export default function FormsPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/client-resources" className="inline-flex items-center gap-2 text-sm font-medium text-[#6a6a6a] hover:text-[#1F6B5F] transition-colors">
            <ArrowLeft size={14} /> Client Resources
          </Link>
        </div>
      </div>

      <section className="bg-[#f7f7f7] py-16 border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Client Resources</p>
          <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">Forms & Documents</h1>
          <p className="text-lg text-[#6a6a6a] max-w-2xl">
            Plain-language explanations of the key documents you'll encounter in a BC real estate transaction — so nothing surprises you.
          </p>
        </div>
      </section>

      <div className="bg-amber-50 border-b border-amber-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-2">
          <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">This is general information only — not legal advice. Always work with a licensed lawyer or notary on your transaction.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {documents.map(doc => (
            <div key={doc.title}
              className="bg-white rounded-[24px] overflow-hidden"
              style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.08) 0px 4px 12px' }}
            >
              <div className="flex items-start gap-4 p-7 border-b border-[#f0f0f0]">
                <div className="w-10 h-10 rounded-full bg-[#e4f0ed] flex items-center justify-center shrink-0">
                  <FileText size={16} className="text-[#1F6B5F]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F]">{doc.category}</span>
                  <h2 className="text-xl font-bold text-[#222222] mt-0.5">{doc.title}</h2>
                </div>
              </div>
              <div className="p-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-3">
                  {doc.description.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm text-[#6a6a6a] leading-relaxed">{para}</p>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-3">Key Terms</p>
                  <ul className="space-y-2.5">
                    {doc.keyTerms.map(term => (
                      <li key={term} className="text-xs text-[#6a6a6a] leading-relaxed border-l-2 border-[#e4f0ed] pl-3">{term}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Questions About the Paperwork?</h2>
          <p className="text-white/70 mb-8">I'll walk you through every document step by step. No jargon, no rush — just clear explanations so you always know what you're signing.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#174f47] transition-colors">
              Ask Marki <ArrowRight size={16} />
            </Link>
            <a href="tel:2503175008" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              <Phone size={16} /> (250) 317-5008
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
