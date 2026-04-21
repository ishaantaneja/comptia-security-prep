export const domains = [
  { id: 1, name: "General Security Concepts", weight: "12%", description: "Foundational security concepts, terminology, and controls." },
  { id: 2, name: "Threats, Vulnerabilities, and Mitigations", weight: "22%", description: "Threat actors, vectors, vulnerabilities, and mitigation techniques." },
  { id: 3, name: "Security Architecture", weight: "18%", description: "Security implications of architecture models, cloud security, and zero trust." },
  { id: 4, name: "Security Operations", weight: "28%", description: "Incident response, monitoring, digital forensics, and vulnerability management." },
  { id: 5, name: "Security Program Management and Oversight", weight: "20%", description: "Governance, risk management, compliance, and security awareness." }
];

export const questions = [
  {
    id: 1, domainId: 1,
    text: "Which of the following security concepts is BEST described as ensuring that data is only accessible to authorized users?",
    options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
    correctAnswer: 0,
    explanation: "Confidentiality ensures that information is not disclosed to unauthorized individuals, entities, or processes."
  },
  {
    id: 2, domainId: 2,
    text: "An attacker sends an email attempting to trick a user into clicking a malicious link. What type of attack is this?",
    options: ["Ransomware", "Phishing", "DDoS", "SQL Injection"],
    correctAnswer: 1,
    explanation: "Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers."
  },
  {
    id: 3, domainId: 3,
    text: "Which concept assumes that threats exist both inside and outside the network, requiring continuous verification of identity?",
    options: ["Defense in Depth", "Zero Trust", "Network Segmentation", "Role-Based Access Control"],
    correctAnswer: 1,
    explanation: "Zero Trust architecture removes the assumption of trust and requires strict identity verification for every person and device trying to access resources."
  },
  {
    id: 4, domainId: 4,
    text: "During an incident response, which phase involves isolating the affected systems to prevent further damage?",
    options: ["Preparation", "Identification", "Containment", "Eradication"],
    correctAnswer: 2,
    explanation: "Containment is the phase where the response team attempts to limit the damage and isolate the affected systems to prevent the incident from spreading."
  },
  {
    id: 5, domainId: 5,
    text: "Which framework is developed by the Department of Commerce to provide a voluntary guidance based on existing standards, guidelines, and practices to reduce cybersecurity risks?",
    options: ["ISO 27001", "NIST CSF", "GDPR", "PCI DSS"],
    correctAnswer: 1,
    explanation: "The NIST Cybersecurity Framework (CSF) is a voluntary framework developed to help organizations manage and reduce cybersecurity risks."
  },
  {
    id: 6, domainId: 4,
    text: "A Chief Information Security Officer wants to monitor the company's servers for SQLi attacks and allow for comprehensive investigations if an attack occurs. The company uses SSL decryption to allow traffic monitoring. Which of the following strategies would best accomplish this goal?",
    options: ["Logging all NetFlow traffic into a SIEM", "Deploying network traffic sensors on the same subnet as the servers", "Logging endpoint and OS-specific security logs", "Enabling full packet capture for traffic entering and exiting the servers"],
    correctAnswer: 3,
    explanation: "Enabling full packet capture (FPC) allows for comprehensive investigations of SQLi attacks because it records the entire payload of the traffic, which is necessary to inspect the malicious SQL queries after SSL decryption."
  },
  {
    id: 7, domainId: 5,
    text: "A company is developing a critical system for the government and storing project information on a fileshare. Which of the following describes how this data will most likely be classified?",
    options: ["Private", "Confidential", "Public", "Restricted"],
    correctAnswer: 1,
    explanation: "Critical systems for the government are typically classified as Confidential, Secret, or Top Secret. In standard commercial/government overlaps, Confidential is used for sensitive project data."
  },
  {
    id: 8, domainId: 4,
    text: "Which of the following describes the reason root cause analysis should be conducted as part of incident response?",
    options: ["To gather IoCs for the investigation", "To discover which systems have been affected", "To eradicate any trace of malware on the network", "To prevent future incidents of the same nature"],
    correctAnswer: 3,
    explanation: "Root Cause Analysis (RCA) is performed during the Lessons Learned phase to understand exactly how the incident occurred so that systemic issues can be fixed, preventing future incidents of the same nature."
  },
  {
    id: 9, domainId: 2,
    text: "Which of the following vulnerabilities is exploited when an attacker overwrites a register with a malicious address?",
    options: ["VM escape", "SQL injection", "Buffer overflow", "Race condition"],
    correctAnswer: 2,
    explanation: "A buffer overflow occurs when a program overruns the buffer's boundary and overwrites adjacent memory locations, such as registers, with malicious addresses (e.g., pointing to shellcode)."
  },
  {
    id: 10, domainId: 3,
    text: "A company would like to provide employees with computers that do not have access to the internet in order to prevent information from being leaked to an online forum. Which of the following would be best for the systems administrator to implement?",
    options: ["Air gap", "Jump server", "Logical segmentation", "Virtualization"],
    correctAnswer: 0,
    explanation: "An air gap is a physical security measure that ensures a secure computer network is physically isolated from unsecured networks, such as the public Internet."
  },
  {
    id: 11, domainId: 3,
    text: "Which of the following should a systems administrator set up to increase the resilience of an application by splitting the traffic between two identical sites?",
    options: ["Load balancing", "Parallel processing", "Failover", "Geographic disruption"],
    correctAnswer: 0,
    explanation: "Load balancing distributes network or application traffic across a number of servers or sites to increase capacity and concurrent users, thus increasing resilience."
  },
  {
    id: 12, domainId: 3,
    text: "A systems administrator set up a perimeter firewall but continues to notice suspicious connections between internal endpoints. Which of the following should be set up in order to mitigate the threat posed by the suspicious activity?",
    options: ["Host-based Firewall", "Web application firewall", "Access control list", "Application allow list"],
    correctAnswer: 0,
    explanation: "A perimeter firewall only protects against external threats. To mitigate lateral movement and suspicious connections between internal endpoints, a Host-based Firewall (or internal segmentation) is required."
  },
  {
    id: 13, domainId: 5,
    text: "A systems administrator notices that the R&D department is not using the company VPN when accessing various company-related services and systems. Which of the following scenarios describes this activity?",
    options: ["Espionage", "Data exfiltration", "Nation-state attack", "Shadow IT"],
    correctAnswer: 3,
    explanation: "Shadow IT refers to information technology systems, devices, software, applications, and services that are used without explicit IT department approval."
  },
  {
    id: 14, domainId: 2,
    text: "An administrator discovers that some files on a database server were recently encrypted. The administrator sees from the security logs that the data was last accessed by a domain user. Which of the following best describes the type of attack that occurred?",
    options: ["Insider threat", "Social engineering", "Watering-hole", "Unauthorized attacker"],
    correctAnswer: 0,
    explanation: "Since the data was accessed and encrypted by a domain user (an authorized internal account), this points to an Insider Threat, whether malicious or compromised."
  },
  {
    id: 15, domainId: 3,
    text: "After a recent vulnerability scan, a security engineer needs to harden the routers within the corporate network. Which of the following is the most appropriate to disable?",
    options: ["Console access", "Routing protocols", "VLANs", "Web-based administration"],
    correctAnswer: 3,
    explanation: "Web-based administration interfaces (like HTTP/HTTPS) on routers are often vulnerable to exploits and should be disabled in favor of secure command-line access like SSH."
  },
  {
    id: 16, domainId: 5,
    text: "A systems administrator would like to deploy a change to a production system. Which of the following must the administrator submit to demonstrate that the system can be restored to a working state in the event of a performance issue?",
    options: ["Backout plan", "Impact analysis", "Test procedure", "Approval procedure"],
    correctAnswer: 0,
    explanation: "A backout plan (or rollback plan) provides the exact steps required to revert the system to its previous state if the change causes unforeseen issues."
  },
  {
    id: 17, domainId: 4,
    text: "Which of the following most impacts an administrator's ability to address CVEs discovered on a server?",
    options: ["Rescanning requirements", "Patch availability", "Organizational impact", "Risk tolerance"],
    correctAnswer: 1,
    explanation: "If a patch has not yet been developed or released by the vendor (patch availability), the administrator cannot address the CVE via patching and must rely on compensating controls."
  },
  {
    id: 18, domainId: 3,
    text: "An organization is looking to optimize its environment and reduce the number of patches necessary for operating systems. Which of the following will best help to achieve this objective?",
    options: ["Microservices", "Virtualization", "Real-time operating system", "Containers"],
    correctAnswer: 3,
    explanation: "Containers package the application and its dependencies without a full OS kernel, significantly reducing the OS footprint and the corresponding number of OS-level patches required."
  },
  {
    id: 19, domainId: 4,
    text: "The CIRT is reviewing an incident where a recruiter used HTTP over port 53 to upload documents to a web server. Which of the following security infrastructure devices could have identified and blocked this activity?",
    options: ["WAF utilizing SSL decryption", "NGFW utilizing application inspection", "UTM utilizing a threat feed", "SD-WAN utilizing IPSec"],
    correctAnswer: 1,
    explanation: "A Next-Generation Firewall (NGFW) with application inspection can identify that the traffic on port 53 (normally DNS) is actually HTTP traffic, and block the protocol mismatch."
  },
  {
    id: 20, domainId: 3,
    text: "An engineer needs to find a solution that creates an added layer of security by preventing unauthorized access to internal company resources. Which of the following would be the best solution?",
    options: ["RDP server", "Jump-server", "Proxy server", "Hypervisor"],
    correctAnswer: 1,
    explanation: "A jump-server (or jump host) is a highly secured, monitored computer on a network used to access and manage devices in a separate security zone, adding a layer of protection."
  }
];

// Ensure we simulate a full 90-question exam dynamically if needed
for (let i = 21; i <= 90; i++) {
  questions.push({
    id: i,
    domainId: (i % 5) + 1,
    text: `Mock Exam Question ${i} extracted from SY0-701 Dumps and Study Guides. Which of the following is the correct answer?`,
    options: ["Option A (Incorrect)", "Option B (Correct)", "Option C (Incorrect)", "Option D (Incorrect)"],
    correctAnswer: 1,
    explanation: "This is a placeholder for questions dynamically loaded from the extended dataset. It simulates the exact length of the CompTIA Security+ exam."
  });
}

export const pbqs = [
  {
    id: 1,
    domainId: 2,
    title: "Firewall Configuration Simulation",
    scenario: "You are tasked with configuring a basic firewall ACL to allow web traffic (HTTP and HTTPS) to your web server (192.168.1.50) while blocking Telnet.",
    tasks: [
      { id: 't1', instruction: "Allow HTTP traffic to the web server.", protocol: "TCP", port: "80", action: "Allow" },
      { id: 't2', instruction: "Allow HTTPS traffic to the web server.", protocol: "TCP", port: "443", action: "Allow" },
      { id: 't3', instruction: "Deny Telnet traffic to all internal servers.", protocol: "TCP", port: "23", action: "Deny" }
    ]
  },
  {
    id: 2,
    domainId: 4,
    title: "Incident Response Playbook: Ransomware",
    scenario: "A user reports their screen is locked with a ransom demand. Identify the correct order of the incident response lifecycle phases to handle this threat.",
    tasks: [
      { id: 'p1', instruction: "Isolate the user's machine from the network.", protocol: "Phase", port: "Containment", action: "Allow" }, // Reusing the select UI for simplicity
      { id: 'p2', instruction: "Wipe the machine and restore from backup.", protocol: "Phase", port: "Eradication", action: "Allow" },
      { id: 'p3', instruction: "Update the anti-malware signatures.", protocol: "Phase", port: "Preparation", action: "Allow" }
    ]
  }
];

export const flashcards = [
  { id: 1, domainId: 1, term: "CIA Triad", definition: "Confidentiality, Integrity, Availability." },
  { id: 2, domainId: 2, term: "Malware", definition: "Software designed to infiltrate or damage a computer system without the user's informed consent." },
  { id: 3, domainId: 3, term: "VPN", definition: "Virtual Private Network; extends a private network across a public network." },
  { id: 4, domainId: 4, term: "SIEM", definition: "Security Information and Event Management; provides real-time analysis of security alerts." },
  { id: 5, domainId: 5, term: "AUP", definition: "Acceptable Use Policy; rules a user must agree to for access to a corporate network or the Internet." },
  { id: 6, domainId: 1, term: "Zero Trust", definition: "A security framework requiring all users, whether in or outside the organization's network, to be authenticated, authorized, and continuously validated." },
  { id: 7, domainId: 2, text: "Phishing", definition: "A cyber attack that uses disguised email as a weapon to trick the email recipient into believing that the message is something they want or need." },
  { id: 8, domainId: 3, term: "Air Gap", definition: "A network security measure employed on one or more computers to ensure that a secure computer network is physically isolated from unsecured networks." },
  { id: 9, domainId: 4, term: "NGFW", definition: "Next-Generation Firewall; a network security device that provides capabilities beyond a traditional, stateful firewall." },
  { id: 10, domainId: 5, term: "RCA", definition: "Root Cause Analysis; the process of discovering the root causes of problems in order to identify appropriate solutions." }
];
