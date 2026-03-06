import { InvestorPageContent } from "@/types/investor";

export const investorData: InvestorPageContent = {
  seo: {
    title: "Investor Relations | Exato Technologies",
    description: "Access Exato Technologies' financial reports, annual returns, board committees, and corporate governance information.",
    keywords: ["investors", "financial reports", "annual returns", "corporate governance", "Exato Technologies"]
  },
  hero: {
    title: "Investor Relations",
    subtitle: "Transparency, Governance, and Growth",
    backgroundImage: "https://picsum.photos/seed/corporate/1920/600"
  },
  categories: [
    {
      id: "offer-documents",
      title: "Offer Documents",
      reports: [
        { title: "DRHP", url: "offer-documents/DRHP.pdf", type: "pdf" },
        { title: "RHP", url: "offer-documents/RHP.pdf", type: "pdf" },
        { title: "Newspaper Advertisement", url: "offer-documents/Newspaper Advertisement.pdf", type: "pdf" },
        { title: "Abridged Prospectus", url: "offer-documents/Abridged Prospectus.pdf", type: "pdf" },
        { title: "General Information Document for investing in Public Issues", url: "offer-documents/GID_Exato.pdf", type: "pdf" },
        { title: "Resident Form", url: "offer-documents/305987_Exato Technologies Limited_R Form_R2.pdf", type: "pdf" },
        { title: "Non Resident Form", url: "offer-documents/305987_Exato Technologies Limited__NR Form_R2.pdf", type: "pdf" },
        { title: "Prospectus", url: "offer-documents/Prospectus.pdf", type: "pdf" }
      ],
      subCategories: [
        {
          id: "exato-corrigendum",
          title: "Exato Corrigendum",
          reports: [
            { title: "JS-Lucknow-26-November-2025", url: "offer-documents/JS-Lucknow-26-November-2025.pdf", type: "pdf" },
            { title: "JS-Delhi-26-November-2025", url: "offer-documents/JS-Delhi-26-November-2025.pdf", type: "pdf" },
            { title: "JS-Chandigarh-26-November-2025", url: "offer-documents/JS-Chandigarh-26-November-2025.pdf", type: "pdf" },
            { title: "JS-Kolkata-26-November-2025", url: "offer-documents/JS-Kolkata-26-November-2025.pdf", type: "pdf" },
            { title: "FE_Pune_26-11-2025", url: "offer-documents/FE_Pune_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Mumbai_26-11-2025", url: "offer-documents/FE_Mumbai_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Lucknow_26-11-2025", url: "offer-documents/FE_Lucknow_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Kolkata_26-11-2025", url: "offer-documents/FE_Kolkata_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Kochi_26-11-2025", url: "offer-documents/FE_Kochi_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Hyderabad_26-11-2025", url: "offer-documents/FE_Hyderabad_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Delhi_26-11-2025", url: "offer-documents/FE_Delhi_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Chennai_26-11-2025", url: "offer-documents/FE_Chennai_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Chandigarh_26-11-2025", url: "commitees-of-board-of-director.html", type: "pdf" },
            { title: "FE_Bengaluru_26-11-2025", url: "offer-documents/FE_Bengaluru_26-11-2025.pdf", type: "pdf" },
            { title: "FE_Ahmedabad_26-11-2025", url: "offer-documents/FE_Ahmedabad_26-11-2025.pdf", type: "pdf" }
          ]
        }
      ]
    },
    {
      id: "annual-report",
      title: "Annual Report",
      reports: [
        { title: "Annual Report For FY 2020-21", url: "Annual%20Reports/2020-21.pdf", type: "pdf" },
        { title: "Annual Report For FY 2021-22", url: "Annual%20Reports/2021-22.pdf", type: "pdf" },
        { title: "Annual Report For FY 2022-23", url: "Annual%20Reports/2022-23.pdf", type: "pdf" },
        { title: "Annual Report For FY 2023-24", url: "Annual%20Reports/2023-24.pdf", type: "pdf" },
        { title: "Annual Report For FY 2024-25", url: "Annual%20Reports/2024-25.pdf", type: "pdf" }
      ]
    },
    {
      id: "annual-return",
      title: "Annual Return",
      reports: [
        { title: "Annual Return FY 2019-20", url: "Annual%20Return/2019-20/Annual_Return_2019-20.pdf", type: "pdf" },
        { title: "Annual Return FY 2020-21", url: "Annual%20Return/2020-21/Annual_Return_2020-21.pdf", type: "pdf" },
        { title: "Annual Return FY 2021-22", url: "Annual%20Return/2021-22/Annual_Return_2021-22.pdf", type: "pdf" },
        { title: "Annual Return FY 2022-23", url: "Annual%20Return/2022-23/Annual_Return_2022-23.pdf", type: "pdf" },
        { title: "Annual Return FY 2023-24", url: "Annual%20Return/2023-24/Annual_Return_2023-24.pdf", type: "pdf" },
        { title: "Annual Return FY 2024-25", url: "Annual%20Return/2023-24/Annual_Return_2024-25.pdf", type: "pdf" }
      ]
    },
    {
      id: "directors",
      title: "Directors and Key Managerial Personnel",
      tables: [
        {
          title: "Directors",
          headers: ["Name", "Designation"],
          rows: [
            { "Name": "Appuorv K Sinha (DIN: 07918398)", "Designation": "Managing Director" },
            { "Name": "Swati Sinha (DIN: 09394596)", "Designation": "Whole-time Director" },
            { "Name": "Abhijeet Sinha (DIN: 11100685)", "Designation": "Non-Executive Director" },
            { "Name": "Omkar Rai (DIN: 01364223)", "Designation": "Independent Director" },
            { "Name": "Vijay Kumar Tyagi (DIN: 10103631)", "Designation": "Independent Director" }
          ]
        },
        {
          title: "KMPs",
          headers: ["Name", "Designation"],
          rows: [
            { "Name": "Mustaqueem Hasan", "Designation": "Chief Financial Officer" },
            { "Name": "Geeta Jain", "Designation": "Company Secretary and Compliance Officer" }
          ]
        }
      ]
    },
    {
      id: "committees",
      title: "Board Committees",
      tables: [
        {
          title: "Audit Committee",
          headers: ["Name of Member", "Name of Directorship", "Designation in Committee"],
          rows: [
            { "Name of Member": "Vijay Kumar Tyagi (DIN: 10103631)", "Name of Directorship": "Non-Executive Independent Director", "Designation in Committee": "Chairperson" },
            { "Name of Member": "Omkar Rai (DIN: 01364223)", "Name of Directorship": "Non-Executive Independent Director", "Designation in Committee": "Member" },
            { "Name of Member": "Appuorv K Sinha (DIN: 07918398)", "Name of Directorship": "Chairman and Managing Director", "Designation in Committee": "Member" }
          ]
        },
        {
          title: "Nomination and Remuneration Committee",
          headers: ["Name of the Member", "Nature of Directorship", "Designation in Committee"],
          rows: [
            { "Name of the Member": "Omkar Rai (DIN: 01364223)", "Nature of Directorship": "Non-Executive Independent Director", "Designation in Committee": "Chairperson" },
            { "Name of the Member": "Vijay Kumar Tyagi (DIN: 10103631)", "Nature of Directorship": "Non-Executive Independent Director", "Designation in Committee": "Member" },
            { "Name of the Member": "Abhijeet Sinha (DIN: 11100685)", "Nature of Directorship": "Non-Executive Director", "Designation in Committee": "Member" }
          ]
        },
        {
          title: "Stakeholders Relationship Committee",
          headers: ["Name of the Member", "Nature of Directorship", "Designation in Committee"],
          rows: [
            { "Name of the Member": "Omkar Rai (DIN: 01364223)", "Nature of Directorship": "Non-Executive Independent Director", "Designation in Committee": "Chairperson" },
            { "Name of the Member": "Appuorv K Sinha (DIN: 07918398)", "Nature of Directorship": "Chairman and Managing Director", "Designation in Committee": "Member" },
            { "Name of the Member": "Swati Sinha (DIN: 09394596)", "Nature of Directorship": "Whole-time Director", "Designation in Committee": "Member" }
          ]
        }
      ]
    },
    {
      id: "consolidated",
      title: "Consolidated Financial Statements",
      reports: [
        { title: "Consolidated Financial Statements FY 2022-23", url: "C_Finanicial_report/2022-23.pdf", type: "pdf" },
        { title: "Consolidated Financial Statements FY 2023-24", url: "C_Finanicial_report/2023-24/.pdf", type: "pdf" },
        { title: "Consolidated Financial Statements FY 2024-25", url: "C_Finanicial_report/2024-25.pdf", type: "pdf" }
      ]
    },
    {
      id: "restated",
      title: "Restated Financial Statements",
      reports: [
        { title: "Restated Financial Statements", url: "Restated Financial Statements.pdf", type: "pdf" }
      ]
    },
    {
      id: "sebi",
      title: "Information pursuant to SEBI (LODR) Regulations, 2015",
      subCategories: [
        {
          id: "related-parties",
          title: "Disclosure of Related Parties Transactions",
          reports: [
            { title: "Disclosure of Related Parties Transactions", url: "documents/related party transaction.pdf", type: "pdf" }
          ]
        },
        {
          id: "subsidiaries",
          title: "Financial Statements of Subsidiary companies",
          subCategories: [
            {
              id: "exato-infotech",
              title: "Exato Infotech Private Limited",
              reports: [
                { title: "Financial Statements (2024-25)", url: "Financial-statement/exato-limited/2024-25.pdf", type: "pdf" },
                { title: "Financial Statements (30.Sept.25)", url: "Financial-statement/exato-limited/30-2025.pdf", type: "pdf" }
              ]
            },
            {
              id: "exato-ai-inc",
              title: "Exato.AI INC.",
              reports: [
                { title: "Financial Statements (2022-23)", url: "Financial-statement/exato-ai/2022-23.pdf", type: "pdf" },
                { title: "Financial Statements (2023-24)", url: "Financial-statement/exato-ai/2023-24.pdf", type: "pdf" },
                { title: "Financial Statements (2024-25)", url: "Financial-statement/exato-ai/2024-25.pdf", type: "pdf" },
                { title: "Financial Statements (30.sept.2025)", url: "Financial-statement/exato-ai/30-2025.pdf", type: "pdf" }
              ]
            },
            {
              id: "exato-ai-pte",
              title: "EXATO.AI PTE. LTD.",
              reports: [
                { title: "Financial Statements (2022-23)", url: "Financial-statement/exato-pte/2022-23.pdf", type: "pdf" },
                { title: "Financial Statements (2023-24)", url: "Financial-statement/exato-pte/2023-24.pdf", type: "pdf" },
                { title: "Financial Statements (2024-25)", url: "Financial-statement/exato-pte/2024-25.pdf", type: "pdf" },
                { title: "Financial Statements (30.sept.2025)", url: "Financial-statement/exato-pte/30-2025.pdf", type: "pdf" }
              ]
            }
          ]
        },
        {
          id: "shareholding",
          title: "Shareholding pattern",
          reports: [
            { title: "Shareholding Pattern as on 05.12.2025", url: "documents/Shareholding Pattern as on 05.12.2025.pdf", type: "pdf" }
          ]
        },
        {
          id: "independent-directors-terms",
          title: "Terms & Conditions for appointment of Independent Directors",
          reports: [
            { title: "Terms & Conditions", url: "terms-conditions.pdf", type: "pdf" }
          ]
        },
        {
          id: "corporate-announcements",
          title: "Corporate Announcements",
          reports: [
            { title: "Intimation of change in CIN", url: "documents/Intimation of change in CIN.pdf", type: "pdf" },
            { title: "Disclosure_Non-Applicability of Regulation 27(2)", url: "documents/Disclosure_Non-Applicability of Regulation 27(2).pdf", type: "pdf" },
            { title: "Reconciliation of Share Capital Audit Report for the Quarter ended December 31, 2025", url: "documents/Reconciliation of Share Capital Audit Report for the Quarter ended December 31, 2025.pdf", type: "pdf" },
            { title: "Disclosure of appointment of Independent Contractors", url: "documents/Disclosure of appointment of Independent Contractors.pdf", type: "pdf" },
            { title: "Disclosure of Receipt of Favourable Income Tax Order", url: "documents/Disclosure of Receipt of Favourable Income Tax Order.pdf", type: "pdf" },
            { title: "Recognition As Platinum Partner By NICE Ltd.", url: "documents/Recognition As Platinum Partner By NICE Ltd.pdf", type: "pdf" },
            { title: "Announcement of Participation of Company in Acumatica Partner Summit, 2026", url: "documents/Announcement of Participation of Company in Acumatica Partner Summit, 2026.pdf", type: "pdf" },
            { title: "Disclosure of appointment of President - Revenue, Marketing & Strategic Alliances", url: "documents/Disclosure of appointment of President - Revenue, Marketing & Strategic Alliances.pdf", type: "pdf" },
            { title: "Outcome of Board Meeting dated February 13th, 2026", url: "documents/Outcome of Board Meeting dated February 13th, 2026.pdf", type: "pdf" },
            { title: "Statement of Deviation or Variation in utilization of funds raised for the quarter ended December 31, 2025", url: "documents/Statement of Deviation or Variation in utilization of funds raised for the quarter ended December 31, 2025.pdf", type: "pdf" },
            { title: "Intimation Of Bagging Of Order", url: "documents/Intimation of Bagging of Order.pdf", type: "pdf" }
          ]
        },
        {
          id: "corporate-governance",
          title: "Corporate Governance",
          reports: [
            { title: "Corporate Governance- December 2025", url: "documents/Corporate Governance- December 2025.pdf", type: "pdf" }
          ]
        },
        {
          id: "financial-results",
          title: "Financial Results",
          subCategories: [
            {
              id: "fy-2025-26",
              title: "2025-26",
              reports: [
                { title: "Board Meeting Intimation_Q3", url: "Board Meeting Intimation_Q3.pdf", type: "pdf" },
                { title: "Trading Window Closure_Q3", url: "Trading Window Closure_Q3.pdf", type: "pdf" },
                { title: "Intimation of Postponement of Board Meeting_Q3", url: "Intimation of Postponement of Board Meeting_Q3.pdf", type: "pdf" },
                { title: "Standalone and Consolidated Un-Audited Financial Results for the quarter and Nine Months ended December 31, 2025", url: "Standalone and Consolidated Un-Audited Financial Results for the quarter and Nine Months ended December 31, 2025.pdf", type: "pdf" }
              ]
            }
          ]
        },
        {
          id: "earning-calls",
          title: "Earning Calls",
          reports: [
            { title: "Intimation of Earnings Call for third Quarter ended 31st December, 2025", url: "documents/Intimation of Earnings Call for third Quarter ended 31st December, 2025.pdf", type: "pdf" },
            { title: "Investor Presentation", url: "documents/Investor Presentation.pdf", type: "pdf" },
            { title: "Outcome Of Investor Meeting", url: "documents/Outcome of Investor Meeting.pdf", type: "pdf" },
            { title: "Audio Recording – Investors Earnings Call (Q3 & 9M FY26)", url: "documents/Audio Recording_Investors Earnings Call_Q3 & 9MFY26.m4a", type: "audio" },
            { title: "Video Recording – Investors Earnings Call (Q3 & 9M FY26)", url: "documents/Video Recording – Investors Earnings Call (Q3 & 9M FY26).mp4", type: "video" },
            { title: "Intimation of Audio Recording - Investors Earnings Call (Q3 & 9M FY26)", url: "documents/Intimation of Audio Recording - Investors Earnings Call (Q3 & 9M FY26).pdf", type: "pdf" },
            { title: "Intimation of Video Recording - Investors Earnings Call (Q3 & 9M FY26)", url: "documents/Intimation of Video Recording - Investors Earnings Call (Q3 & 9M FY26).pdf", type: "pdf" },
            { title: "Transcript_Earnings Call", url: "documents/Transcript_Earnings Call.pdf", type: "pdf" },
            { title: "Intimation_Transcript to BSE", url: "documents/Intimation_Transcript to BSE.pdf", type: "pdf" }
          ]
        }
      ]
    },
    {
      id: "investor-contact",
      title: "Investor Contact",
      contacts: [
        {
          title: "Address for Investors’ Correspondence",
          name: "CS Geeta Jain, Company Secretary and Compliance Officer",
          address: "Office Address: A-33, 02nd Floor, SECTOR-2, Noida, Gautam Buddha Nagar, Noida, Uttar Pradesh, India, 201301",
          telephone: "0120 – 3210402",
          email: "investor@exato.ai"
        },
        {
          title: "Registrar and Transfer Agents",
          name: "KFin Technologies Limited",
          address: "Registered Office: 301, The Centrium, 3rd Floor, 57, Lal Bahadur Shastri Road, Nav Pada, Kurla (West), Mumbai – 400070, Maharashtra\nCorporate Office: Selenium Tower-B, Plot 31 & 32, Gachibowli, Financial District, Nanakramguda, Serilingampally, Hyderabad – 500 032, Telangana",
          telephone: "+91 40 6716 2222",
          email: "exato.ipo@kfintech.com",
          website: "www.kfintech.com",
          contactPerson: "Mr. Murali Krishna",
          sebiRegistration: "INR000000221",
          cin: "L72400MH2017PLC444072"
        },
        {
          title: "Chief Financial Officer",
          name: "Mr. Mustaqueem Hasan",
          address: "A-33, 2nd Floor, Sector-2, Noida, Gautam Buddha Nagar, Uttar Pradesh, India, 201301",
          telephone: "0120-3210403",
          email: "account@exatotechnologies.com"
        },
        {
          title: "Company Secretary",
          name: "Ms. Geeta Jain",
          address: "A-33, 2nd Floor, Sector-2, Noida, Gautam Buddha Nagar, Uttar Pradesh, India, 201301",
          telephone: "0120-3210402",
          email: "compliance@exato.ai"
        }
      ]
    },
    {
      id: "notices",
      title: "Notices",
      reports: [
        { title: "EGM_Notice_3rd of 2025-26", url: "Notice/EGM_Notice_3rd of 2025-26.pdf", type: "pdf" }
      ]
    },
    {
      id: "csr",
      title: "Corporate Social Responsibility",
      subCategories: [
        {
          id: "csr-plan",
          title: "CSR Annual Plan",
          reports: [
            { title: "CSR Annual Action Plan (2023-24)", url: "documents/CSR annual action plan 23-24.pdf", type: "pdf" },
            { title: "CSR Annual Action Plan (2024-25)", url: "documents/CSR annual action plan 24-25.pdf", type: "pdf" },
            { title: "CSR Annual Action Plan (2025-26)", url: "documents/CSR annual action plan 25-26.pdf", type: "pdf" }
          ]
        },
        {
          id: "csr-projects",
          title: "CSR Projects",
          reports: []
        }
      ]
    },
    {
      id: "policies",
      title: "Policies",
      reports: [
        { title: "CSR Policy", url: "policies/CSR-Policy.pdf", type: "pdf" },
        { title: "Archival Policy", url: "policies/Archival-Policy.pdf", type: "pdf" },
        { title: "Code For Independent Directors", url: "policies/code-for-independent-director.pdf", type: "pdf" },
        { title: "Code for Directors and Senior Management", url: "policies/code-for-director-senior.pdf", type: "pdf" },
        { title: "Familiarization Programs for Independent Directors Policy", url: "policies/Familiarization-Programs-for-Independent-Directors.pdf", type: "pdf" },
        { title: "Nomination & Remuneration Policy", url: "policies/Nomination-Remuneration-Policy.pdf", type: "pdf" },
        { title: "Code Of Conduct For Insider Trading", url: "policies/insider-trading.pdf", type: "pdf" },
        { title: "Policy On Criteria For Determining Materiality Of Events", url: "policies/Materiality.pdf", type: "pdf" },
        { title: "POSH Policy", url: "policies/POSH-Policy.pdf", type: "pdf" },
        { title: "Related Party Transaction Policy", url: "policies/realated-mangement.pdf", type: "pdf" },
        { title: "Whistle Blower Policy", url: "policies/whistle.pdf", type: "pdf" },
        { title: "Prevention of Sexual Harrassment Policy", url: "policies/sexual-harassment.pdf", type: "pdf" },
        { title: "Policy on identification of Material Creditors, Group Companies and Material Litigation", url: "policies/Policy-on-identification-of-Material-Creditors.pdf", type: "pdf" },
        { title: "Policy on Succession Planning, Board Diversity and Independence of Director", url: "policies/Policy on Succession Planning, Board Diversity and Independence of Director.pdf", type: "pdf" }
      ]
    },
    {
      id: "material-documents",
      title: "Material Documents",
      reports: [
        { title: "MOA", url: "material-documents/1.MOA.pdf", type: "pdf" },
        { title: "AOA", url: "material-documents/2.AOA.pdf", type: "pdf" },
        { title: "Certificate of Incorporation dated 18.05.2016", url: "material-documents/3.Certificate of Incorporation dated 18.05.2016.pdf", type: "pdf" },
        { title: "Certificate of Incorporation dated 31.07.2025", url: "material-documents/4.Certificate of Incorporation dated 31.07.2025.pdf", type: "pdf" },
        { title: "IPO Resolution - Board of Directors", url: "material-documents/5.IPO Resoluion-Board of Directors.pdf", type: "pdf" },
        { title: "IPO Resolution - Shareholders", url: "material-documents/6.IPO Resolution-Shareholders.pdf", type: "pdf" },
        { title: "Approval of DRHP Resolution - Board of Directors", url: "material-documents/7.Approval of DRHP Resolution-Board of Directors.pdf", type: "pdf" },
        { title: "Approval of RHP Resolution - Board of Directors", url: "material-documents/8.Approval of RHP Resolution-Board of Directors.pdf", type: "pdf" },
        { title: "Statement of Tax Benefits", url: "material-documents/9.Statement of Tax Benefits.pdf", type: "pdf" },
        { title: "Certificate on KPI", url: "material-documents/10.Certificate on KPI.pdf", type: "pdf" },
        { title: "Site Visit Report", url: "material-documents/11.Site Visit Report.pdf", type: "pdf" },
        { title: "DD Report", url: "material-documents/13.DD Report.pdf", type: "pdf" },
        { title: "BSE Approval - IP", url: "material-documents/14.BSE Approval - IP.pdf", type: "pdf" },
        { title: "Certificate on outstanding dues to creditors", url: "material-documents/Certficate on outstanding dues to creditors.pdf", type: "pdf" }
      ],
      subCategories: [
        {
          id: "consents",
          title: "Consents",
          reports: [
            { title: "Consent_Promoters", url: "material-documents/1Consent_Promoters.pdf", type: "pdf" },
            { title: "Consent_Directors and KMP", url: "material-documents/2Consent_Directors and KMP.pdf", type: "pdf" },
            { title: "Consent_Promoter Selling Shareholder", url: "material-documents/3Consent_Promoter Selling Shareholder.pdf", type: "pdf" },
            { title: "Consent_BRLM", url: "material-documents/4Consent_BRLM.pdf", type: "pdf" },
            { title: "Consent to act as Banker to the Company", url: "material-documents/5Consent to act as Banker to the Company.pdf", type: "pdf" },
            { title: "Consent from Legal Advisor", url: "material-documents/6Consent from Legal Advisor.pdf", type: "pdf" },
            { title: "Consent_Registrar to the Offer", url: "material-documents/7Consent_Registrar to the Offer.pdf", type: "pdf" },
            { title: "Consent_Market Maker", url: "material-documents/8Consent_Market maker.pdf", type: "pdf" },
            { title: "Consent_Underwriter", url: "material-documents/9Consent_Underwriter.pdf", type: "pdf" },
            { title: "Consent_Syndicate Member", url: "material-documents/10Consent_Syndicate Member.pdf", type: "pdf" },
            { title: "Consent_Subsyncidate Member", url: "material-documents/11Consent_Subsyncidate Member.pdf", type: "pdf" },
            { title: "Consent_Escrow Bank", url: "material-documents/12Consent_Escrow Bank.pdf", type: "pdf" },
            { title: "Consent_Sponsor Bank", url: "material-documents/12Consent_Sponsor Bank.pdf", type: "pdf" },
            { title: "Consent_Statutory Auditors", url: "material-documents/13Consent_Expert.pdf", type: "pdf" }
          ]
        }
      ]
    },
    {
      id: "material-contracts",
      title: "Material Contracts",
      reports: [
        { title: "Offer Agreement", url: "material-contracts/Offer-Agreement.pdf", type: "pdf" },
        { title: "RTA Agreement", url: "material-contracts/RTA-Agreement.pdf", type: "pdf" },
        { title: "Tripartite Agreement with RTA and NSDL", url: "material-contracts/NSDL.pdf", type: "pdf" },
        { title: "Tripartite Agreement with RTA and CDSL", url: "material-contracts/CDSL.pdf", type: "pdf" },
        { title: "Market Making Agreement", url: "material-contracts/Market Making Agreement.pdf", type: "pdf" },
        { title: "Banker to the Offer Agreement", url: "material-contracts/Banker to the Offer Agreement.pdf", type: "pdf" },
        { title: "Share Escrow Agreement", url: "material-contracts/Share Escrow Agreement.pdf", type: "pdf" },
        { title: "Syndicate Agreement", url: "material-contracts/Syndicate Agreement.pdf", type: "pdf" },
        { title: "Sub-Syndicate Agreement", url: "material-contracts/Sub-Syndicate Agreement.pdf", type: "pdf" },
        { title: "Underwriting Agreement", url: "material-contracts/Underwriting Agreement.pdf", type: "pdf" }
      ]
    }
  ]
};
