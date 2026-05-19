export const config = {
    "number": 47,
    "slug": "chapter-expansion-kit",
    "title": "Chapter Expansion Kit",
    "category": "Student Agency Operations",
    "tagline": "A public playbook for evaluating, onboarding, and launching new city chapters.",
    "persona": "Volta leadership and prospective regional directors.",
    "gap": "Expansion can dilute quality if new chapters lack readiness criteria and launch standards.",
    "niche": "Quality-controlled nonprofit chapter growth.",
    "metric": "new chapters launched with readiness evidence",
    "modules": [
        "City readiness rubric",
        "Leader interview guide",
        "First 90 days plan",
        "Launch risk register"
    ],
    "theme": {
        "accent": "#f97316",
        "accent2": "#fdba74",
        "emoji": "\ud83c\udf93",
        "metricLabel": "Operating readiness",
        "workflow": [
            "Set roles and artifacts",
            "Run rubric review",
            "Resolve blockers",
            "Export operating packet"
        ],
        "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "city-readiness-rubric",
            "label": "City readiness rubric",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify city readiness rubric with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "leader-interview-guide",
            "label": "Leader interview guide",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify leader interview guide with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "first-90-days-plan",
            "label": "First 90 days plan",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify first 90 days plan with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "launch-risk-register",
            "label": "Launch risk register",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify launch risk register with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Chapter Expansion Kit and capture baseline evidence.",
            "Complete the city readiness rubric workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Volta Cyprus Chapter",
        "chapter": "Cyprus",
        "studentLead": "Volta Student Lead",
        "notes": "Internal chapter operations project for student-led delivery excellence. Chapter Expansion Kit sample.",
        "evidencePrefix": "Chapter Expansion Kit",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map