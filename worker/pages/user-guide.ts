import { htmlShell, downloadIcon } from './shared'

export function renderUserGuide(): string {
  return htmlShell(
    'OCS User Guide',
    `
    <h1 class="prose"><span class="serif" style="font-size:2.2rem;color:#fff;">OCS User Guide</span></h1>
    <p style="color:#9ca3af;font-size:13px;margin-bottom:4px;">Classification Principles &amp; Implementation Guidelines</p>
    <p style="color:#6b7280;font-size:12px;margin-bottom:24px;">Version 0.99 &nbsp;|&nbsp; &copy; 2026 Balestra Group &nbsp;|&nbsp; CC BY 4.0</p>
    <div class="accent-line"></div>

    <div class="download-row">
      <a href="https://docs.google.com/document/d/1FWNzgTatdx-9s07bIB3RNx1pgbuE6lIk/export?format=pdf" class="dl-btn" target="_blank">
        ${downloadIcon} Download PDF
      </a>
      <a href="https://docs.google.com/spreadsheets/d/1Fa4gWqRxzfVXxF5Mcgri3hGhiRh8fPYv/export?format=xlsx" class="dl-btn" target="_blank">
        ${downloadIcon} Taxonomy XLSX
      </a>
    </div>

    <div class="prose">
      <h2>Introduction</h2>
      <p>OCS is a procurement classification system built to align with the way spend categories get managed. It is not a financial accounting tool.</p>
      <p>Most taxonomies ask: 'What is it?' OCS asks: <strong>'How are we managing it?'</strong> That shift changes everything. The same physical item belongs in different categories depending on who's buying it, why, and how they're managing the supplier relationship.</p>
      <p>OCS organises spend by three things: supply market characteristics (who your suppliers are and how they compete), strategic intent (how you're managing the relationship), and make/buy boundaries (where you engage the supply market).</p>

      <h2>Core Classification Principles</h2>

      <h3>Principle 1: Supply Market, Not Product Characteristics</h3>
      <p>OCS classifies by who you buy from and how they compete, not what the item is called.</p>
      <p>The same HVAC system gets three different classifications depending on context. Same HVAC system. Three classifications. All correct.</p>

      <h3>Principle 2: Strategic Intent Determines Classification</h3>
      <p>The same product belongs in different categories based on your intent.</p>

      <h3>Principle 3: Make/Buy Boundary Determines Level 3</h3>
      <p>Where you engage the supply market determines your Level 3 Detail codes. Three automotive companies all describe their purchases as 'engine-related materials.' Their classifications are entirely different.</p>

      <h2>The Golden Rule</h2>
      <p>Before classifying anything, ask three questions:</p>
      <ul>
        <li>Can we negotiate this component separately?</li>
        <li>Do we want to manage it as a distinct supply market?</li>
        <li>Is it significant enough to warrant separate attention?</li>
      </ul>
      <p>If the answer is no to any of these, keep the item bundled in the primary classification.</p>

      <h2>Understanding the Structure</h2>
      <p>OCS operates across three levels:</p>
      <ul>
        <li><strong>Level 1 (Category)</strong> &mdash; 15 broad supply market groups</li>
        <li><strong>Level 2 (Class)</strong> &mdash; 71 distinct supply market segments</li>
        <li><strong>Level 3 (Detail)</strong> &mdash; 361+ extensible detail codes</li>
      </ul>

      <h3>Level 3: Extensible by Design</h3>
      <p>Level 3 exists primarily to help systems and people classify purchases accurately. It serves as training data for auto-classification, guidance for users making decisions, mapping targets for legacy migrations, and context for disambiguating similar purchases.</p>
      <p>Level 3 is not a rigid standard, an exhaustive list, or a replacement for your item master. Add Detail codes for your specific business, map your existing item masters to Level 2 classes, and extend freely within the Level 2 structure.</p>

      <h2>The Three-Test Framework</h2>
      <p>When a purchase includes multiple distinct components, apply all three tests. If any test fails, keep the components bundled. If all three pass, split the classification.</p>

      <h3>Test 1: Materiality</h3>
      <ul>
        <li>Is it more than 5&ndash;10% of total contract value, or more than $10K?</li>
        <li>Does it have a different lifecycle or refresh requirement?</li>
        <li>Would you benchmark it separately from other components?</li>
        <li>Is it strategically important to the business?</li>
      </ul>

      <h3>Test 2: Control</h3>
      <ul>
        <li>Do Incoterms give you control? (EXW, FOB = you; CIF, DDP = seller)</li>
        <li>Does the contract structure allow separation?</li>
        <li>Are there market alternatives?</li>
        <li>Would separating it destroy functionality?</li>
      </ul>

      <h3>Test 3: Strategic Intent</h3>
      <p>Split the classification if any of the following is true:</p>
      <ul>
        <li>You're actively managing this component's supplier relationships separately today</li>
        <li>You might want to source it separately in future</li>
        <li>Separate data would help future sourcing decisions</li>
        <li>You want to build the business case for unbundling</li>
      </ul>

      <h3>The 'Build the Data Now' Principle</h3>
      <p>A laptop refresh cycle illustrates why this matters. In Year 1, you bundle laptops and peripherals from HP but split the classification: $500K to 05-01 End User Computing, $50K to 05-02 Peripherals. In Year 2, analysis reveals HP peripherals are 30% above market rate. You couldn't have discovered this without having split the data.</p>

      <h3>When Future Optionality Doesn't Matter</h3>
      <p>Keep components bundled when integration itself is the value proposition, not just a convenience. A managed print service contract is the clearest example &mdash; separating devices, consumables and service would destroy the business model.</p>

      <h2>Cross-Cutting Categories</h2>

      <h3>Freight &amp; Logistics</h3>
      <p>Use Incoterms to determine how to handle freight. A freight line item appearing on an invoice doesn't mean you're managing it strategically.</p>

      <h3>Tariffs &amp; Duties</h3>
      <p>Import tariffs and customs duties are taxes, not procured services. They sit outside OCS. The services you procure to manage those obligations are in OCS: customs brokerage in 15-02, trade compliance consulting in 03-02.</p>

      <h3>Software vs. Services</h3>
      <p>Pure software you operate yourself goes to 04-01 Software & Applications. When software comes with significant professional services, classify by primary value. Creative software ecosystems (Adobe, Canva, Figma) classify to 14-02 Digital Media & Creative Assets.</p>

      <h2>Common Scenarios</h2>

      <h3>Scenario 1: HP Laptop Refresh Deal</h3>
      <p>HP provides laptops, monitors, docks, keyboards/mice, and 2 years of device imaging support. Total: $580K. Recommended split: 05-01 for $500K laptops, 05-02 for $50K peripherals, 03-06 for $30K imaging support.</p>

      <h3>Scenario 2: Turbine Purchase with Freight</h3>
      <p>Same basic purchase, four different outcomes depending on intent &mdash; from fully embedded DDP to actively managed EXW carrier relationships. Strategic intent drives the decision.</p>

      <h3>Scenario 3: Office Fit-Out</h3>
      <p>Single turnkey contract: classify as 12-03 (primary contractor type). Separate contracts: split by supplier relationship.</p>

      <h3>Scenario 4: Managed Print Service</h3>
      <p>Keep bundled as 05-03-006. Integration is the value, not just convenience.</p>

      <h3>Scenario 5: Salesforce Implementation</h3>
      <p>Split: 04-01 for $100K/year software licences, 03-06 for $300K implementation. Different benchmarking applies to each.</p>

      <h2>What's Out of Scope</h2>
      <ul>
        <li><strong>Retail inventory</strong> &mdash; Products purchased for resale</li>
        <li><strong>Government taxes, fees and levies</strong> &mdash; Tariffs, duties, VAT, regulatory fees</li>
        <li><strong>Financial outcomes</strong> &mdash; Interest expense, FX losses, write-downs</li>
        <li><strong>Internal labour costs</strong> &mdash; Generally out of scope (exception: make/buy analysis)</li>
      </ul>

      <h2>OCS vs. General Ledger</h2>
      <p>OCS and the GL answer different questions. You need both. They don't have to match. A leased laptop: 05-01 in OCS, 6200 Operating Lease Expense in the GL. Both correct. Both necessary.</p>

      <h2>Category Strategy Maturity</h2>
      <ul>
        <li><strong>Level 1: Strategic (Gold Standard)</strong> &mdash; Category managers own entire Level 1 categories. Cross-functional governance with executive sponsorship.</li>
        <li><strong>Level 2: Operational</strong> &mdash; Separate category managers own specific Level 2 classes, with 12&ndash;18 month planning horizons.</li>
        <li><strong>Level 3: Transactional</strong> &mdash; Buyers processing purchase orders with reactive sourcing. The foundation for future maturity.</li>
      </ul>
      <p>Start where you are. Use the structure that matches your current capability. Progress when ready.</p>

      <h2>Vertical-Specific Guidance</h2>
      <ul>
        <li><strong>Healthcare:</strong> Clinical capital in 02-01, consumables/pharma in 01-05</li>
        <li><strong>Manufacturing:</strong> Raw components in 01, machines in 02, MRO in 08</li>
        <li><strong>Financial Services:</strong> All software in 04, use Level 3 to differentiate core banking from standard enterprise</li>
        <li><strong>Public Sector:</strong> Grants and subsidies fall outside scope; use 12 for public works, 03 for advisory</li>
      </ul>

      <h2>Governance and Extension</h2>
      <p>Level 1 and Level 2 are standard across the organisation. Procurement leadership decides. Level 3 is flexible &mdash; category managers can add Detail codes for their categories.</p>
      <p>Reserve codes 900&ndash;999 for company-specific or experimental use.</p>

      <h2>Migrating from Other Taxonomies</h2>
      <p>Don't do 1:1 mapping. Understand what you're actually buying, then classify by OCS principles. Re-evaluate embedded costs &mdash; freight and installation that were bundled in your old system may warrant splitting.</p>

      <h2>Quick Reference: The Ten Rules</h2>
      <ol>
        <li>'How are we controlling it?' &mdash; If not separately, it's bundled.</li>
        <li>Supply market, not product &mdash; Classify by who you buy from, not what it is.</li>
        <li>Strategic intent matters &mdash; Same item, different classification.</li>
        <li>When in doubt, split &mdash; Preserves future optionality.</li>
        <li>Three tests for multi-component: Materiality + Control + Strategic Intent.</li>
        <li>Incoterms for freight: EXW/FOB = you control; CIF/DDP = seller controls.</li>
        <li>Taxes aren't procurement &mdash; Tariffs, duties, VAT are out of scope.</li>
        <li>OCS &ne; GL &mdash; Different purposes. You need both.</li>
        <li>Level 3 is yours to extend &mdash; Add Detail codes freely.</li>
        <li>Start where you are &mdash; OCS works at any maturity level.</li>
      </ol>

      <h2>Roadmap to v1.0</h2>
      <p>OCS v0.99 is a pre-release for community review. Feedback is welcomed on classification principles, real-world edge cases, industry-specific needs, and documentation clarity.</p>
    </div>
    `,
  )
}
