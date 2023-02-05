const input = document.querySelector('input');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13 && input.value) {
        var node = document.createElement("DIV");
        node.style.color = "#888";
        node.style.fontSize = "12px";
        node.style.paddingLeft = '5px';

        if (input.value === 'help') {
            const para = document.createElement("p");
            para.style.display = 'block';
            para.style.marginTop = '8px';
            const text = document.createTextNode('\nSupported commands: about, experience, education, projects, skills, contact, resume, awards, Clear\n');
            para.appendChild(text);
            document.querySelector(".commands").appendChild(para);
        }
        else if (input.value == 'about' || input.value == 'About') {
            const para = document.createElement("p");
            para.style.display = 'block';
            para.style.marginTop = '8px';
            const text = document.createTextNode('\nHello, my name is Zuriel Shanley Tanyory and I live in a tiny red dot country known as Singapore. I have a huge passion in Cybersecurity and in Deep Learning. During my free time, I would be playing basketball, badminton or coding in my little Cozy room of Yew Tee Village.\n');
            para.appendChild(text);
            document.querySelector(".commands").appendChild(para);

        } else if (input.value == "projects" || input.value == 'Projects' || input.value == 'Project' || input.value == 'project' || input.value == 'proj') {
            location.replace("projects.html");

        } else if (input.value == "resume" || input.value == 'Resume' || input.value == 'cv' || input.value == 'CV' || input.value == 'Cv') {
            location.replace("https://504089e6-6d14-4de0-8579-5fce8cba32be.filesusr.com/ugd/e0a86f_afe7c9e1bb41484697ae0301e6d6d16c.pdf");

        } else if (input.value == "awards" || input.value == 'Awards' || input.value == 'achievement' || input.value == 'Achievement' || input.value == 'award' || input.value == 'awards' || input.value == 'achievements' || input.value == 'Achievements') {
            location.replace("awards.html");

        } else if (input.value == "experience" || input.value == 'Experience' || input.value == 'exp' || input.value == 'working experience' || input.value == '') {
            const para = document.createElement("p");
            para.style.display = 'block';
            para.style.marginTop = '8px';

            const educationHistory = ["Work Experience", '1. NCS PTE LTD (August 2021 - February 2022)',
                'CYBERSECURITY CONSULTANT INTERN', 'In my 6 month internship at NCS, I was involved in deploying an Advance Security Operations Center (ASOC) for our client. I was attach to the Endpoint Detection & Response team whereby, I was subject matter expert for VMware Carbon Black and CyberArk products.'];

            educationHistory.forEach(history => {
                const line = document.createElement("p");
                line.style.display = 'block';
                line.textContent = history;
                para.appendChild(line);

            });

            document.querySelector(".commands").appendChild(para);

        } else if (input.value == "skills" || input.value == 'Skill' || input.value == 'Skills' || input.value == 'skill' || input.value == 'skillset' || input.value == 'skillsets' || input.value == 'Skillset' ) {
            location.replace("skillset.html");

        } else if (input.value == "clear" || input.value == 'Clear') {
            location.reload();

        } else if (input.value == "education" || input.value == "Education" || input.value == "edu" || input.value == "Edu") {
            const para = document.createElement("p");
            para.style.display = 'block';
            para.style.marginTop = '8px';

            const educationHistory = ["Zuriel's Education Journey",'1. De La Salle Primary School (2009 - 2014)',
                '2. Shuqun Secondary School (2015-2018)',
                '3. Ngee Ann Polytechnic - Diploma In Cybersecurity & Digital Forensics (2019-2022)',
                '4. National University of Singapore - Bachelor In Information Security (2024-2028)'];

            educationHistory.forEach(history => {
                const line = document.createElement("p");
                line.style.display = 'block';
                line.textContent = history;
                para.appendChild(line);

            });

            document.querySelector(".commands").appendChild(para);

        } else if (input.value == "contact" || input.value == "Contacts" || input.value == "Contact" || input.value == "contacts") {
            const para = document.createElement("p");
            para.style.display = 'block';
            para.style.marginTop = '8px';

            const educationHistory = ["How to contact me?", 'Email me: Zuriel.shanley@gmail.com',
                'Call me: +65 9271 3276'];

            educationHistory.forEach(history => {
                const line = document.createElement("p");
                line.style.display = 'block';
                line.textContent = history;
                para.appendChild(line);

            });

            document.querySelector(".commands").appendChild(para);

        } else {
            const para = document.createElement("p");
            para.style.display = 'block';
            para.style.marginTop = '8px';
            const text = document.createTextNode('→ command not found:' + input.value);
            para.appendChild(text);
            document.querySelector(".commands").appendChild(para);
        }
        input.value = "";
    }
});

function f() {
    document.querySelector('input').focus();
}