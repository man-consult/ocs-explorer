import { htmlShell, downloadIcon } from './shared'

export function renderPlaybook(): string {
  return htmlShell(
    'OCS Playbook',
    `
    <h1 class="prose"><span class="serif" style="font-size:2.2rem;color:#fff;">OCS Playbook</span></h1>
    <p style="color:#9ca3af;font-size:13px;margin-bottom:4px;">A classification system for strategic category management. Not financial accounting.</p>
    <p style="color:#6b7280;font-size:12px;margin-bottom:24px;">Version 0.99 &nbsp;|&nbsp; &copy; 2026 Balestra Group &nbsp;|&nbsp; CC BY 4.0</p>
    <div class="accent-line"></div>

    <div class="download-row">
      <a href="https://docs.google.com/document/d/1VOvbnEhWfVQ1iffl3h3u8MeKRWAW2hY1/export?format=pdf" class="dl-btn" target="_blank">
        ${downloadIcon} Download PDF
      </a>
      <a href="https://docs.google.com/spreadsheets/d/1Fa4gWqRxzfVXxF5Mcgri3hGhiRh8fPYv/export?format=xlsx" class="dl-btn" target="_blank">
        ${downloadIcon} Taxonomy XLSX
      </a>
    </div>

    <div class="prose">
      <h2>What OCS Is</h2>
      <p>Most procurement taxonomies ask: 'What is it?' OCS asks a different question: <strong>'How are we managing it?'</strong></p>
      <p>That shift matters. The same HVAC unit belongs in three different categories depending on who's buying it and why. A construction company installing it as part of a project delivery classifies it under Building Services (12-02). A hospital replacing aging infrastructure classifies it under Facilities & Real Estate (02-03). A manufacturer buying it for a production facility classifies it under Production Machinery & Systems (02-01).</p>
      <p>OCS organises spend by three things:</p>
      <ul>
        <li><strong>Supply market characteristics</strong> &mdash; who the suppliers are and how they compete</li>
        <li><strong>Strategic intent</strong> &mdash; how you're managing the relationship</li>
        <li><strong>Make/buy boundaries</strong> &mdash; where you engage the supply market</li>
      </ul>
      <p>This makes OCS a procurement tool, not an accounting tool. Your general ledger handles financial reporting. OCS handles category strategy.</p>

      <h2>The Golden Rule</h2>
      <p>Before classifying anything, ask:</p>
      <ul>
        <li>Can we negotiate this component separately?</li>
        <li>Do we want to manage it as a distinct supply market?</li>
        <li>Is it significant enough to warrant separate attention?</li>
      </ul>
      <p>If the answer is no to any of these, keep it bundled in the primary classification. Don't create category complexity that doesn't reflect how you're actually operating.</p>

      <h2>The Three-Test Framework</h2>
      <p>When a purchase includes multiple distinct components, apply all three tests before splitting the classification. If any test fails, keep the components bundled. If all three pass, split.</p>

      <h3>Test 1: Materiality</h3>
      <p>Is this component significant enough to manage separately?</p>
      <ul>
        <li>Is it more than 5&ndash;10% of total contract value, or more than $10K in absolute terms?</li>
        <li>Does it have a different lifecycle or refresh requirement?</li>
        <li>Would you benchmark it separately?</li>
        <li>Is it strategically important to the business?</li>
      </ul>

      <h3>Test 2: Control</h3>
      <p>Can you actually manage this component separately?</p>
      <ul>
        <li>Do Incoterms give you control? (EXW, FOB = you control; CIF, DDP = seller controls)</li>
        <li>Does the contract structure allow separation?</li>
        <li>Are there market alternatives &mdash; could you source from a different supplier?</li>
        <li>Would separating destroy functionality?</li>
      </ul>

      <h3>Test 3: Strategic Intent</h3>
      <p>Are you managing this separately now, or might you reasonably want to? This is the test most taxonomies miss.</p>
      <p>Split the classification if any of the following is true:</p>
      <ul>
        <li>You're actively managing this component's supplier relationships separately today</li>
        <li>You might want to source it separately in future</li>
        <li>Separate data would help future sourcing decisions</li>
        <li>You want to build the business case for unbundling</li>
      </ul>
      <p>Keep it bundled only if you're permanently committed to an integrated approach and there's no realistic scenario where you'd ever separate the components.</p>

      <h2>Decision Trees</h2>

      <h3>Service vs. Product</h3>
      <p>Start with: what are you buying?</p>
      <ul>
        <li>Outcomes, expertise, labour, knowledge &rarr; Is it human capability or knowledge work?
          <ul>
            <li>Yes &rarr; Resourcing (03-01 to 03-08)</li>
            <li>No &rarr; Operational Services (06-01 to 06-04)</li>
          </ul>
        </li>
        <li>Physical goods, materials, equipment, software &rarr; continue to materials/equipment/technology categories</li>
      </ul>

      <h3>Freight Classification</h3>
      <p>Start with: what are the Incoterms?</p>
      <ul>
        <li><strong>EXW / FOB</strong> (you arrange transport)
          <ul>
            <li>Managing carrier contracts strategically? Yes &rarr; 15-01 Freight & Transportation</li>
            <li>Not managing strategically? &rarr; Embed with product</li>
          </ul>
        </li>
        <li><strong>CIF / DDP</strong> (seller arranges)
          <ul>
            <li>Might you want to optimise freight separately later? Yes &rarr; Split to 15-01 (build data now)</li>
            <li>No realistic future intent &rarr; Embed with product</li>
          </ul>
        </li>
      </ul>

      <h3>Multi-Component Contracts</h3>
      <p>Apply the Three-Test Framework in sequence:</p>
      <ul>
        <li>Test 1 &mdash; Materiality: Is each component more than 5&ndash;10% of contract value, or more than $10K? No &rarr; embed. Yes &rarr; continue.</li>
        <li>Test 2 &mdash; Control: Can you manage it separately? No &rarr; embed. Yes &rarr; continue.</li>
        <li>Test 3 &mdash; Strategic Intent: Managing it now, or might you want to? No &rarr; embed. Yes &rarr; split.</li>
      </ul>
      <div class="callout"><strong>When in doubt: split.</strong> Preserves future optionality.</div>

      <h3>Equipment vs. Infrastructure</h3>
      <ul>
        <li>Foundational, long-lifecycle (5+ years), strategic &rarr; Plant & Infrastructure (02-01 to 02-04)</li>
        <li>Workplace-facing, refresh cycles of 3&ndash;5 years &rarr; Workplace & Productivity (05-01 to 05-09)</li>
        <li>Maintenance or operations-related &rarr; MRO & Maintenance Materials (08-01 to 08-08)</li>
      </ul>

      <h2>Common Classification Scenarios</h2>

      <h3>Scenario 1: Enterprise Software + Implementation</h3>
      <p>You're purchasing an ERP system and paying the vendor to implement and configure it.</p>
      <p>Apply the three tests:</p>
      <ul>
        <li><strong>Materiality:</strong> Yes. Implementation is often a significant portion of year-one cost.</li>
        <li><strong>Control:</strong> Yes. You could buy the software from the publisher and engage a separate systems integrator.</li>
        <li><strong>Strategic intent:</strong> Yes. Managing software licence renewals is a different capability from managing project-based implementation labour.</li>
      </ul>
      <p><strong>Result:</strong> Split. Code licences to 04-01 Software & Applications. Code implementation labour to 03-06 IT & Digital Capability.</p>

      <h3>Scenario 2: Capital Equipment + Maintenance Contract</h3>
      <p>You're buying a heavy manufacturing asset with a 5-year preventative maintenance contract.</p>
      <ul>
        <li><strong>Materiality:</strong> Yes. Maintenance over five years is highly material.</li>
        <li><strong>Control:</strong> Yes. Maintenance can be unbundled and performed by in-house technicians or third-party providers.</li>
        <li><strong>Strategic intent:</strong> Yes. Equipment is CapEx. Maintenance is OpEx with entirely different refresh cycles.</li>
      </ul>
      <p><strong>Result:</strong> Split. Code the machine to 02-01 Production Machinery & Systems. Code the maintenance contract to 06-01 or 08 MRO.</p>

      <h3>Scenario 3: Marketing Agency on Retainer</h3>
      <p>A single agency manages your brand strategy, designs your ad creatives, and buys media placements on your behalf.</p>
      <p><strong>Result:</strong> Split. Code agency and creative fees to 03-04 Marketing & Creative Capability. Code ad placements to 09-01 Advertising & Media Buying.</p>

      <h3>Scenario 4: Managed Print Service</h3>
      <p>A 5-year contract covering devices, toner, maintenance and cost-per-page pricing. All three tests pass for materiality and control, but strategic intent fails. The cost-per-page model only works as an integrated solution.</p>
      <p><strong>Result:</strong> Keep bundled as 05-03-006 Managed Print Services.</p>

      <h2>What's Out of Scope</h2>
      <ul>
        <li><strong>Retail inventory</strong> &mdash; Products purchased for resale are not in OCS.</li>
        <li><strong>Government taxes and levies</strong> &mdash; Tariffs, duties, VAT, regulatory fees are obligations to governments, not purchases from suppliers.</li>
        <li><strong>Financial outcomes</strong> &mdash; Interest expense, FX losses, write-downs have no supplier relationship.</li>
        <li><strong>Internal labour costs</strong> &mdash; Generally out of scope, except for make/buy analysis in Resourcing (03).</li>
      </ul>

      <h2>OCS vs. General Ledger</h2>
      <p>OCS and the GL serve different purposes. You need both. They don't need to match.</p>
      <p>A leased laptop: OCS classifies it as 05-01 End User Computing Devices (procurement manages it as a device category). The GL codes it as an operating lease expense (finance treats it as OpEx). Both correct. Different questions.</p>

      <h2>Governance and Extension</h2>
      <p>OCS follows a model similar to Linux distributions. The core structure (Level 1 and Level 2) is protected. Level 3 is yours to extend freely.</p>
      <p><strong>You can</strong>, without permission: use OCS in your organisation, build tools on OCS, extend Level 3 codes freely, create sector-specific Level 3 libraries, and contribute improvements.</p>
      <p><strong>You cannot</strong>, without permission: modify Level 1 or Level 2 structure and call it 'OCS', or use the Open Category Standard trademark for incompatible systems.</p>

      <h2>Quick Reference</h2>
      <ul>
        <li><strong>'How are we controlling it?'</strong> &mdash; If not separately, it's bundled.</li>
        <li><strong>Supply market, not product</strong> &mdash; Classify by who you buy from, not what it is.</li>
        <li><strong>Strategic intent matters</strong> &mdash; Same item, different classification based on how you manage it.</li>
        <li><strong>When in doubt, split</strong> &mdash; Preserves future optionality. You can consolidate later.</li>
        <li><strong>Three tests for multi-component:</strong> Materiality + Control + Strategic Intent.</li>
        <li><strong>Incoterms for freight:</strong> EXW/FOB = you control; CIF/DDP = seller controls.</li>
        <li><strong>Taxes aren't procurement</strong> &mdash; Tariffs, duties, VAT are out of scope.</li>
        <li><strong>OCS &ne; GL</strong> &mdash; Different purposes. You need both.</li>
        <li><strong>Level 3 is yours to extend</strong> &mdash; Add Detail codes freely within Level 2 structure.</li>
        <li><strong>Start where you are</strong> &mdash; OCS works at any maturity level.</li>
      </ul>
    </div>
    `,
  )
}
