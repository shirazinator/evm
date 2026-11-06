/**
 * Sample Demo Data (Synthetic Dummy Records)
 * For testing calculations, advance reconciliation, and export engines.
 * Contains NO personal data or real tour receipts.
 */
window.DEMO_TOUR_DATA = [
  {
    "date": "2026-11-01",
    "description": "Airport Taxi to Client Site",
    "category": "Travel",
    "amountExpression": "850",
    "amountTotal": 850,
    "paidBy": "Project Lead",
    "remark": "Uber trip receipt",
    "payments": [],
    "bills": []
  },
  {
    "date": "2026-11-01",
    "description": "Working Lunch with Client Team",
    "category": "Food",
    "amountExpression": "620",
    "amountTotal": 620,
    "paidBy": "Project Lead",
    "remark": "Restaurant bill",
    "payments": [],
    "bills": []
  },
  {
    "date": "2026-11-02",
    "description": "Hotel Stay & Breakfast (1 Night)",
    "category": "Accommodation",
    "amountExpression": "3200",
    "amountTotal": 3200,
    "paidBy": "Project Lead",
    "remark": "Hotel accommodation invoice",
    "payments": [],
    "bills": []
  },
  {
    "date": "2026-11-02",
    "description": "Site Inspection Local Transport",
    "category": "Travel",
    "amountExpression": "430",
    "amountTotal": 430,
    "paidBy": "Project Lead",
    "remark": "Local taxi",
    "payments": [],
    "bills": []
  }
];

window.DEMO_ADVANCE_DATA = [
  {
    "date": "2026-11-01",
    "source": "Client Project Advance",
    "amountExpression": "15000",
    "amountTotal": 15000,
    "remark": "Initial project tour fund advance",
    "payments": []
  }
];
