//1.Create your own resume data in JSON format

let resumeData = {
  "name": "Mohammed Syed Moosha",
  "contact": {
    "email": "moosha31@gmail.com",
    "phone": "9940580229",
    "address": "Chennai , india"
  },
  "summary": "Worked as a process associate in TCS from Jun 2019 to Dec 2022, A willingness to learn new and take on understanding of processes as required for the role",
  "education": [
    {
      "degree": "B. Com I.S.M (Information System Management)",
      "college": "A.M Jain college ",
      "graduationYear": "2019"
    }
  ],
  "experience": [
    {
      "title": " Process Associate",
      "company": "TCS",
      "dates": "2019",
      "responsibilities": [
        "Retail and Commercial Banking, Loan account closure, Payment application, Waiver, Refund, GST reports, Analysis of HL reports, Audit sample check, MIS reports, UAT Testing, and Reconciliation"
      ]
    }
  ],
  "skills": {
    "programmingLanguages": ["Python", "C", "C++"],
    "technologies": ["Microsoft-Excel", "Power BI", "SQL"],
    "softSkills": ["Problem solving ", "Teamwork ", "Communication"]
  }
};

//2.For the above JSON, iterate over all for loops (for, for in, for of, for each)

// Parsing using for loop
console.log("Using for loop:");
for (let i = 0; i < resumeData.education.length; i++) {
    let education = resumeData.education[i];
    console.log(`Degree: ${education.degree}`);
    console.log(`College: ${education.college}`);
    console.log(`Graduation Year: ${education.graduationYear}`);
}

// Parsing using for...in loop
console.log("\nUsing for...in loop:");
for (let key in resumeData.contact) {
    console.log(`${key}: ${resumeData.contact[key]}`);
}

// Parsing using for...of loop
console.log("\nUsing for...of loop:");
for (const education of resumeData.education) {
  console.log(`Degree: ${education.degree}`);
  console.log(`College: ${education.college}`);
  console.log(`Graduation Year: ${education.graduationYear}`);
}

// Parsing skills using forEach
console.log("\nUsing forEach for skills:");
resumeData.skills.programmingLanguages.forEach(language => {
    console.log(`Programming Language: ${language}`);
});

resumeData.skills.technologies.forEach(tech => {
    console.log(`Technology: ${tech}`);
});

resumeData.skills.softSkills.forEach(skill => {
    console.log(`Soft Skill: ${skill}`);
});

