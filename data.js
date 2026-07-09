const notesData = [
  {
    "title": "Task",
    "category": "Recruitment / HR",
    "note": "Task ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "New Job Requirement (Job Opening)",
    "category": "Recruitment / HR",
    "note": "New Job Requirement (Job Opening) ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Job Applicant",
    "category": "Recruitment / HR",
    "note": "Candidate/application details manage karne ke liye."
  },
  {
    "title": "Interview",
    "category": "Recruitment / HR",
    "note": "Candidate ke interview schedule, feedback aur result manage karne ke liye."
  },
  {
    "title": "Job Offer",
    "category": "Recruitment / HR",
    "note": "Selected candidate ko offer details issue karne ke liye."
  },
  {
    "title": "New Employee Joining",
    "category": "Recruitment / HR",
    "note": "New employee onboarding, documents aur joining process track karne ke liye."
  },
  {
    "title": "Existing Employees (User)",
    "category": "Recruitment / HR",
    "note": "Existing Employees (User) ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Employee Checkin",
    "category": "Recruitment / HR",
    "note": "Employee ki in/out timing record karne ke liye. Attendance aur shift calculation mein use hota hai."
  },
  {
    "title": "Task",
    "category": "Accounting Shortcuts",
    "note": "Task ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Chart of Accounts",
    "category": "Accounting Shortcuts",
    "note": "Company ke tamam accounts/ledgers ka tree structure. Yahan assets, liabilities, income, expenses aur equity accounts manage hotay hain."
  },
  {
    "title": "Sales Invoice",
    "category": "Accounting Shortcuts",
    "note": "Customer ko sale bill banane ke liye. Is se revenue aur accounts receivable entry create hoti hai."
  },
  {
    "title": "Sales Invoice Report View",
    "category": "Accounting Shortcuts",
    "note": "Sales Invoice Report View ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Purchase Invoice",
    "category": "Accounting Shortcuts",
    "note": "Supplier ka bill record karne ke liye. Is se expense/stock aur accounts payable create hota hai."
  },
  {
    "title": "Journal Entry",
    "category": "Accounting Shortcuts",
    "note": "Manual accounting adjustment, opening balance, correction ya transfer entries ke liye use hoti hai."
  },
  {
    "title": "Opening Entry",
    "category": "Accounting Shortcuts",
    "note": "Opening Entry ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Payment Entry",
    "category": "Accounting Shortcuts",
    "note": "Customer se payment receive ya supplier ko payment karne ke liye use hoti hai."
  },
  {
    "title": "Accounts Receivable",
    "category": "Accounting Shortcuts",
    "note": "Accounts Receivable ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "General Ledger",
    "category": "Accounting Shortcuts",
    "note": "General Ledger ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Trial Balance",
    "category": "Accounting Shortcuts",
    "note": "Debit aur credit balances ki summary. Month-end checking aur financial reporting ke liye important report."
  },
  {
    "title": "Dashboard",
    "category": "Accounting Shortcuts",
    "note": "Dashboard ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Learn Accounting",
    "category": "Accounting Shortcuts",
    "note": "Learn Accounting ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Company",
    "category": "Accounting Masters",
    "note": "Company ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Chart of Accounts",
    "category": "Accounting Masters",
    "note": "Company ke tamam accounts/ledgers ka tree structure. Yahan assets, liabilities, income, expenses aur equity accounts manage hotay hain."
  },
  {
    "title": "Accounts Settings",
    "category": "Accounting Masters",
    "note": "Accounts Settings ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Fiscal Year",
    "category": "Accounting Masters",
    "note": "Fiscal Year ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Accounting Dimension",
    "category": "Accounting Masters",
    "note": "Accounting Dimension ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Finance Book",
    "category": "Accounting Masters",
    "note": "Finance Book ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Accounting Period",
    "category": "Accounting Masters",
    "note": "Accounting Period ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Payment Term",
    "category": "Accounting Masters",
    "note": "Payment Term ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Journal Entry",
    "category": "General Ledger",
    "note": "Manual accounting adjustment, opening balance, correction ya transfer entries ke liye use hoti hai."
  },
  {
    "title": "Journal Entry Template",
    "category": "General Ledger",
    "note": "Journal Entry Template ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "General Ledger",
    "category": "General Ledger",
    "note": "General Ledger ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Customer Ledger Summary",
    "category": "General Ledger",
    "note": "Customer Ledger Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Supplier Ledger Summary",
    "category": "General Ledger",
    "note": "Supplier Ledger Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Sales Invoice",
    "category": "Accounts Receivable",
    "note": "Customer ko sale bill banane ke liye. Is se revenue aur accounts receivable entry create hoti hai."
  },
  {
    "title": "Customer",
    "category": "Accounts Receivable",
    "note": "Customer master record jisme billing, contact, tax aur credit details hoti hain."
  },
  {
    "title": "Payment Entry",
    "category": "Accounts Receivable",
    "note": "Customer se payment receive ya supplier ko payment karne ke liye use hoti hai."
  },
  {
    "title": "Payment Request",
    "category": "Accounts Receivable",
    "note": "Payment Request ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Payment Reconciliation",
    "category": "Accounts Receivable",
    "note": "Payment Reconciliation ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Accounts Receivable",
    "category": "Accounts Receivable",
    "note": "Accounts Receivable ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Accounts Receivable Summary",
    "category": "Accounts Receivable",
    "note": "Accounts Receivable Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Sales Register",
    "category": "Accounts Receivable",
    "note": "Sales Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Item-wise Sales Register",
    "category": "Accounts Receivable",
    "note": "Item-wise Sales Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Sales Order Analysis",
    "category": "Accounts Receivable",
    "note": "Sales Order Analysis ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Delivered Items To Be Billed",
    "category": "Accounts Receivable",
    "note": "Delivered Items To Be Billed ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Purchase Invoice",
    "category": "Accounts Payable",
    "note": "Supplier ka bill record karne ke liye. Is se expense/stock aur accounts payable create hota hai."
  },
  {
    "title": "Supplier",
    "category": "Accounts Payable",
    "note": "Supplier/vendor master jisme purchase, contact, tax aur payment details hoti hain."
  },
  {
    "title": "Payment Entry",
    "category": "Accounts Payable",
    "note": "Customer se payment receive ya supplier ko payment karne ke liye use hoti hai."
  },
  {
    "title": "Payment Reconciliation",
    "category": "Accounts Payable",
    "note": "Payment Reconciliation ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Accounts Payable",
    "category": "Accounts Payable",
    "note": "Accounts Payable ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Accounts Payable Summary",
    "category": "Accounts Payable",
    "note": "Accounts Payable Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Purchase Register",
    "category": "Accounts Payable",
    "note": "Purchase Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Item-wise Purchase Register",
    "category": "Accounts Payable",
    "note": "Item-wise Purchase Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Purchase Order Analysis",
    "category": "Accounts Payable",
    "note": "Purchase Order Analysis ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Received Items To Be Billed",
    "category": "Accounts Payable",
    "note": "Received Items To Be Billed ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Trial Balance",
    "category": "Financial Statements",
    "note": "Debit aur credit balances ki summary. Month-end checking aur financial reporting ke liye important report."
  },
  {
    "title": "Profit and Loss Statement",
    "category": "Financial Statements",
    "note": "Income, expense aur profit/loss ki report specific period ke liye."
  },
  {
    "title": "Balance Sheet",
    "category": "Financial Statements",
    "note": "Company ke assets, liabilities aur equity ki financial position show karti hai."
  },
  {
    "title": "Cash Flow",
    "category": "Financial Statements",
    "note": "Cash Flow ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Consolidated Financial Statement",
    "category": "Financial Statements",
    "note": "Consolidated Financial Statement ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Sales Taxes and Charges Template",
    "category": "Taxes",
    "note": "Sales Taxes and Charges Template ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Purchase Taxes and Charges Template",
    "category": "Taxes",
    "note": "Purchase Taxes and Charges Template ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Item Tax Template",
    "category": "Taxes",
    "note": "Item Tax Template ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Tax Category",
    "category": "Taxes",
    "note": "Tax Category ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Tax Rule",
    "category": "Taxes",
    "note": "Tax Rule ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Tax Withholding Category",
    "category": "Taxes",
    "note": "Tax Withholding Category ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Lower Deduction Certificate",
    "category": "Taxes",
    "note": "Lower Deduction Certificate ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Chart of Cost Centers",
    "category": "Cost Center and Budgeting",
    "note": "Chart of Cost Centers ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Budget",
    "category": "Cost Center and Budgeting",
    "note": "Budget ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Accounting Dimension",
    "category": "Cost Center and Budgeting",
    "note": "Accounting Dimension ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Cost Center Allocation",
    "category": "Cost Center and Budgeting",
    "note": "Cost Center Allocation ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Budget Variance Report",
    "category": "Cost Center and Budgeting",
    "note": "Budget Variance Report ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Monthly Distribution",
    "category": "Cost Center and Budgeting",
    "note": "Monthly Distribution ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Currency",
    "category": "Multi Currency",
    "note": "Currency ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Currency Exchange",
    "category": "Multi Currency",
    "note": "Currency Exchange ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Exchange Rate Revaluation",
    "category": "Multi Currency",
    "note": "Exchange Rate Revaluation ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Bank Account",
    "category": "Bank Statement",
    "note": "Bank Account ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Bank Clearance",
    "category": "Bank Statement",
    "note": "Bank Clearance ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Bank Reconciliation Statement",
    "category": "Bank Statement",
    "note": "Bank statement aur ERP entries ko match/reconcile karne ke liye report."
  },
  {
    "title": "Trial Balance for Party",
    "category": "Accounting Reports",
    "note": "Trial Balance for Party ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Payment Period Based On Invoice Date",
    "category": "Accounting Reports",
    "note": "Payment Period Based On Invoice Date ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Sales Partners Commission",
    "category": "Accounting Reports",
    "note": "Sales Partners Commission ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Customer Credit Balance",
    "category": "Accounting Reports",
    "note": "Customer Credit Balance ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Sales Payment Summary",
    "category": "Accounting Reports",
    "note": "Sales Payment Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Address And Contacts",
    "category": "Address And Contacts",
    "note": "Address And Contacts ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Gross Profit",
    "category": "Profitability",
    "note": "Gross Profit ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Profitability Analysis",
    "category": "Profitability",
    "note": "Profitability Analysis ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Sales Invoice Trends",
    "category": "Profitability",
    "note": "Sales Invoice Trends ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Purchase Invoice Trends",
    "category": "Profitability",
    "note": "Purchase Invoice Trends ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Chart of Accounts Importer",
    "category": "Opening and Closing",
    "note": "Chart of Accounts Importer ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Period Closing Voucher",
    "category": "Opening and Closing",
    "note": "Period Closing Voucher ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Subscription Plan",
    "category": "Subscription Management",
    "note": "Subscription Plan ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Subscription",
    "category": "Subscription Management",
    "note": "Subscription ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Subscription Settings",
    "category": "Subscription Management",
    "note": "Subscription Settings ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Shareholder",
    "category": "Share Management",
    "note": "Shareholder ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Share Transfer",
    "category": "Share Management",
    "note": "Share Transfer ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Payment Gateway Account",
    "category": "Settings",
    "note": "Payment Gateway Account ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Terms and Conditions Template",
    "category": "Settings",
    "note": "Terms and Conditions Template ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Mode of Payment",
    "category": "Settings",
    "note": "Mode of Payment ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Settings",
    "category": "GST India Shortcuts",
    "note": "GST Settings ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GSTR-1 Beta",
    "category": "GST India Shortcuts",
    "note": "GSTR-1 Beta ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GSTR-3B",
    "category": "GST India Shortcuts",
    "note": "GST summary return report jisme outward/inward tax values aur payment details hoti hain."
  },
  {
    "title": "Purchase Reconciliation Tool",
    "category": "GST India Shortcuts",
    "note": "Purchase Reconciliation Tool ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "HSN Code",
    "category": "GST India Shortcuts",
    "note": "Items ke HSN/SAC tax classification codes manage karne ke liye."
  },
  {
    "title": "GSTR-1",
    "category": "GST Sales and Purchase Reports",
    "note": "Sales/outward supplies GST return ke liye report."
  },
  {
    "title": "GST Sales Register",
    "category": "GST Sales and Purchase Reports",
    "note": "GST Sales Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Purchase Register",
    "category": "GST Sales and Purchase Reports",
    "note": "GST Purchase Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Itemised Sales Register",
    "category": "GST Sales and Purchase Reports",
    "note": "GST Itemised Sales Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Itemised Purchase Register",
    "category": "GST Sales and Purchase Reports",
    "note": "GST Itemised Purchase Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Bill of Entry Summary",
    "category": "GST Sales and Purchase Reports",
    "note": "Bill of Entry Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "e-Waybill Log",
    "category": "GST Logs",
    "note": "e-Waybill Log ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "e-Invoice Log",
    "category": "GST Logs",
    "note": "e-Invoice Log ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Return Log",
    "category": "GST Logs",
    "note": "GST Return Log ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Inward Supply",
    "category": "GST Logs",
    "note": "GST Inward Supply ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "e-Invoice Summary",
    "category": "Other GST Reports",
    "note": "e-Invoice Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GSTR-3B Details",
    "category": "Other GST Reports",
    "note": "GSTR-3B Details ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Balance",
    "category": "Other GST Reports",
    "note": "GST Balance ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "HSN-wise Summary of Outward Supplies",
    "category": "Other GST Reports",
    "note": "HSN-wise Summary of Outward Supplies ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "HSN-wise Summary of Inward Supplies",
    "category": "Other GST Reports",
    "note": "HSN-wise Summary of Inward Supplies ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Advance Detail",
    "category": "Other GST Reports",
    "note": "GST Advance Detail ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GSTIN Status",
    "category": "Other GST Reports",
    "note": "GSTIN Status ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Sales Register Beta",
    "category": "New GST Reports",
    "note": "GST Sales Register Beta ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Purchase Register Beta",
    "category": "New GST Reports",
    "note": "GST Purchase Register Beta ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Job Work Stock Movement",
    "category": "New GST Reports",
    "note": "GST Job Work Stock Movement ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Tax Rate-wise Summary",
    "category": "New GST Reports",
    "note": "GST Tax Rate-wise Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "GST Account-wise Summary",
    "category": "New GST Reports",
    "note": "GST Account-wise Summary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Leave Application",
    "category": "Payables / HR Shortcuts",
    "note": "Employee leave request submit aur approve/reject karne ke liye."
  },
  {
    "title": "Expense Claim",
    "category": "Payables / HR Shortcuts",
    "note": "Employee ke business expenses claim aur approval ke liye."
  },
  {
    "title": "Leave Encashment",
    "category": "Payables / HR Shortcuts",
    "note": "Leave Encashment ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Leave Policy",
    "category": "Payables / HR Shortcuts",
    "note": "Leave Policy ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Leave Policy Assignment",
    "category": "Payables / HR Shortcuts",
    "note": "Leave Policy Assignment ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Leave Allocation",
    "category": "Payables / HR Shortcuts",
    "note": "Leave Allocation ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Attendance",
    "category": "Payables / HR Shortcuts",
    "note": "Employee ki daily present, absent, half day ya leave status maintain karne ke liye."
  },
  {
    "title": "Shift Type",
    "category": "Payables / HR Shortcuts",
    "note": "Shift Type ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Travel Request",
    "category": "Payables / HR Shortcuts",
    "note": "Travel Request ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Employee Attendance Tool (Bio Matric Machine)",
    "category": "Payables / HR Shortcuts",
    "note": "Employee Attendance Tool (Bio Matric Machine) ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Event",
    "category": "Payables / HR Shortcuts",
    "note": "Event ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Employee Grievance",
    "category": "Payables / HR Shortcuts",
    "note": "Employee Grievance ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Employee Achievement",
    "category": "Payables / HR Shortcuts",
    "note": "Employee Achievement ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Relieving Letter",
    "category": "Payables / HR Shortcuts",
    "note": "Relieving Letter ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Monthly Attendance Sheet",
    "category": "Payables / HR Shortcuts",
    "note": "Monthly Attendance Sheet ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Shift Attendance",
    "category": "Payables / HR Shortcuts",
    "note": "Shift Attendance ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Salary Component",
    "category": "Payables / HR Shortcuts",
    "note": "Salary Component ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Salary Structure",
    "category": "Payables / HR Shortcuts",
    "note": "Salary Structure ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Salary Structure Assignment",
    "category": "Payables / HR Shortcuts",
    "note": "Salary Structure Assignment ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Salary Slip",
    "category": "Payables / HR Shortcuts",
    "note": "Employee salary ka monthly document jisme earnings, deductions aur net pay show hota hai."
  },
  {
    "title": "Payroll Entry",
    "category": "Payables / HR Shortcuts",
    "note": "Multiple employees ki salary slips process karne aur accounting entry banane ke liye."
  },
  {
    "title": "Additional Salary",
    "category": "Payables / HR Shortcuts",
    "note": "Additional Salary ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Employee Incentive",
    "category": "Payables / HR Shortcuts",
    "note": "Employee Incentive ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Salary Register",
    "category": "Payables / HR Shortcuts",
    "note": "Salary Register ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  },
  {
    "title": "Employee Leave Balance",
    "category": "Payables / HR Shortcuts",
    "note": "Employee Leave Balance ke notes yahan add karein. Is section mein purpose, steps, important fields, example aur common errors likh sakte hain."
  }
];
