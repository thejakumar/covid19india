function questionAnswer() {

    var inp = document.getElementById("input");

    var ques = document.getElementById("question");

    redS.innerHTML = "";

    var greenS = document.getElementById("greenS");
    greenS.innerHTML = "";

    var str = "";

    var QA = results(), QAObject;

    var questions = Object.keys(QA);

    var answers = Object.values(QA);

    var sQA = document.getElementById("selectedQA");

    var liQ=[], hrQ, selQ, selA, olQ, olA, adjust, load;

    var info = document.getElementById("info");
    ques.appendChild(info);
    var add = document.getElementById("add");

    inp.addEventListener("keydown", function() {

        var len = 0;

        olQ = document.createElement("ol");
        olQ.id = "remQues";
        olA = document.createElement("ol");
        olA.id = "remAns";
        if(load) {
            load.remove();
        }

        var remQues = document.getElementById("remQues");
        if(inp.value.length!=0) {
            var counter = [];
            for(var i=0;i<questions.length;i++) {
                str = inp.value.toLowerCase().split(" ");
                var count=0;
                for(var j=0;j<str.length;j++) {
                    if(str[j].length!=0 && questions[i].toLowerCase().includes(str[j].toLowerCase())) {
                        count++;
                    }               
                }
                if(count!=0) len++;
                counter.push(count);
            }
            for(var x=0;x<counter.length;x++) {
                for(var y=0;y<counter.length;y++) {
                    if(counter[x]>counter[y]) {
                        temp=counter[x];
                        counter[x]=counter[y];
                        counter[y]=temp;

                        temp=questions[x];
                        questions[x]=questions[y];
                        questions[y]=temp;

                        temp=answers[x];
                        answers[x]=answers[y];
                        answers[y]=temp;
                    }
                }
            }
            var i;
            for(i=0;i<10 && i<questions.length;i++)
            {
                info.innerHTML = "";   
                if(counter[i]!=0) getQuery(i);
            }
            var num = 10+i;
            if(len>=10) {
                adjust = document.getElementById("adjust");

                load = document.createElement("div");
                load.id = "load"
                load.innerHTML = "Load More Possible Questions";
                adjust.appendChild(load);
                load.onclick = function() {
                    while(i<num && i<questions.length) {
                        if(counter[i]!=0) getQuery(i);
                        i++;
                    }
                    num+=10;
                    if(i>=len) {
                        setTimeout(function() {
                            load.remove();
                        }, 3000);
                        load.innerHTML = "No More Possible Questions";
                    }
                } 

            } 
        }
        if(remQues) {
            remQues.remove();
        }
        if(inp.value.length==0 && selQ&&selA) {
            selQ.innerHTML = "";
            selA.innerHTML = "";
            redS.innerHTML = "";
            greenS.innerHTML = "";
            sQA.innerHTML = "Click on the Generated Questions to see Solutions here";
            info.innerHTML = "Possible questions are generated here.";
        }
        if(inp.value.length === 0 && info) {
            info.innerHTML = "Possible questions are generated here.";
        }
    })


    function addData() {

        add.addEventListener("click", function() {
            add.innerHTML = "";
            var adder = document.getElementById("adder");
            var aQues = document.getElementById("aQues");
            var aAns = document.getElementById("aAns");
            var questionZone = document.getElementById("questionZone");
            var answerZone = document.getElementById("answerZone");

            var textAreaQues = document.createElement("textarea");
            var textAreaAns = document.createElement("textarea");
            var btnA = document.createElement("button");
            var btnD = document.createElement("button");

            questionZone.appendChild(textAreaQues);
            answerZone.appendChild(textAreaAns);
            adder.appendChild(btnA);
            adder.appendChild(btnD);

            textAreaQues.className = "textQues";
            textAreaAns.className = "textAns";
            btnA.id = "btnA";
            btnD.id = "btnD";

            aQues.innerHTML = "Your Question";
            aAns.innerHTML = "Your Answer";
            btnA.innerHTML = "Add";
            btnD.innerHTML = "Done Adding";

            btnA.addEventListener("click", function() {
                QAObject[textAreaQues.value] = textAreaAns.value;
            })

            btnD.addEventListener("click", function() {
                add.innerHTML = "Know some information? add here.";
                aQues.innerHTML = "";
                textAreaQues.remove();

                aAns.innerHTML = "";
                textAreaAns.remove();

                btnA.remove();
                btnD.remove();
            }) 
        });

    }
    getQuery = (i) => {

        liQ[i] = document.createElement("li");
        liQ[i].id = "liQH".concat(i);
        liQ[i].className = "liQH";
        hrQ = document.createElement("hr");
        hrQ.className = "hr";
        ques.appendChild(olQ);
        olQ.appendChild(liQ[i]);
        liQ[i].innerHTML = questions[i];
        olQ.appendChild(hrQ);

        
        
        var subStr = str[str.length-1]
        var q = questions[i].toLowerCase().indexOf(subStr.toLowerCase());
        var p, strLeft, strM, strRight, mark;
        p=str[str.length-1].length;
        if(q>-1) {
            strLeft = questions[i].slice(0,q);
            strM = questions[i].slice(q,p+q);
            strRight = questions[i].slice(p+q,questions[i].length);
            mark = document.createElement("mark");
            liQ[i].innerHTML = "";
            liQ[i].innerHTML += strLeft;
            liQ[i].appendChild(mark);
            mark.innerHTML = strM;
            liQ[i].innerHTML += strRight;
        }

        liQ[i].addEventListener("click", function(event) {
        
            redS.innerHTML = "Question:";
            greenS.innerHTML = "Answer:";
            sQA.innerHTML = "";
            var str = event.target.innerHTML.replace("<mark>","").replace("</mark>","")
            selQ = document.getElementById("questionS");
            selQ.innerHTML = str;
            selA = document.getElementById("answerS");
            selA.innerHTML = QA[str];
        }) 
    }

    function results() {
        var video = document.createElement("iframe");
        video.src= "https://www.youtube.com/embed/tgbNymZ7vqY"
        return QAObject = {
            "What is corona virus" : `Corona viruses are a large family of viruses which may cause illness
        in animals or humans. In humans, several coronaviruses are known
        to cause respiratory infections ranging from the common cold to more
        severe diseases such as Middle East Respiratory Syndrome (MERS)
        and Severe Acute Respiratory Syndrome (SARS). The most recently
        discovered coronavirus causes coronavirus disease COVID-19.`,
        
            "What is COVID-19"     : `COVID-19 is the infectious disease caused by the most recently
        discovered corona virus. This new virus and disease were unknown
        before the outbreak began in Wuhan, China, in December 2019.`,
        
            "What are the symptoms of COVID-19" : `The most common symptoms of COVID-19 are fever, tiredness, and
        dry cough. Some patients may have aches and pains, nasal
        congestion, runny nose, sore throat or diarrhea. These symptoms are
        usually mild and begin gradually. Some people become infected but
        don’t develop any symptoms and don't feel unwell. Most people
        (about 80%) recover from the disease without needing special
        treatment. Around 1 out of every 6 people who gets COVID-19
        becomes seriously ill and develops difficulty breathing. Older people,
        and those with underlying medical problems like high blood pressure,
        heart problems or diabetes, are more likely to develop serious illness.
        People with fever, cough and difficulty breathing should seek medical
        attention.`,
        
            "How does COVID-19 spread"  : `People can catch COVID-19 from others who have the virus. The
        disease can spread from person to person through small droplets from
        the nose or mouth which are spread when a person with COVID-19
        coughs or exhales. These droplets land on objects and surfaces
        around the person. Other people then catch COVID-19 by touching
        these objects or surfaces, then touching their eyes, nose or mouth.
        People can also catch COVID-19 if they breathe in droplets from a
        person with COVID-19 who coughs out or exhales droplets. This is
        why it is important to stay more than 1 meter (3 feet) away from a
        person who is sick.`,
        
            "Can the virus that causes COVID-19 be transmitted through the air?"  : `Studies to date suggest that the virus that causes COVID-19 is mainly
        transmitted through contact with respiratory droplets rather than
        through the air`,
        
            "Can CoVID-19 be caught from a person who has no symptoms? "  : `The main way the disease spreads is through respiratory droplets
        expelled by someone who is coughing. The risk of catching COVID-19
        from someone with no symptoms at all is very low. However, many
        people with COVID-19 experience only mild symptoms. This is
        particularly true at the early stages of the disease. It is therefore
        possible to catch COVID-19 from someone who has, for example, just
        a mild cough and does not feel ill.`,
        "Can I catch COVID-19 from the feces of someone with the disease?" : `The risk of catching COVID-19 from the feces of an infected person
        appears to be low. While initial investigations suggest the virus may
        be present in feces in some cases, spread through this route is not a 
        main feature of the outbreak. The ongoing research on the ways
        COVID-19 is spread and will continue to share new findings. Because
        this is a risk, however, it is another reason to clean hands regularly,
        after using the bathroom and before eating.`,
        "What can I do to protect myself and prevent the spread of disease" : `Stay aware of the latest information on the COVID-19 outbreak,
        available on the national,state and local public health authority. Many
        countries around the world have seen cases of COVID-19 and several
        have seen outbreaks. Authorities in China and some other countries
        have succeeded in slowing or stopping their outbreaks. However, the
        situation is unpredictable so check regularly for the latest news. `,
        "How reduce the chances of being infected" : `Regularly and thoroughly clean your hands with an alcoholbased hand rub, Maintain at least 1 metre (3 feet) distance between yourself and
        anyone, Avoid touching eyes, nose and mouth, Make sure you, and the people around you, follow good
        respiratory hygiene.`,
        "What are protect measures for the person coming from areas where COVID-19 is spreading?" : `Self isolate at home for 14 days`,
        "How likely am I to catch COVID-19?" : `The risk depends on where you are - and more specifically, whether
        there is a COVID-19 outbreak unfolding there. Be sure to comply with any local
        restrictions on travel, movement or large gatherings. Cooperating with
        disease control efforts will reduce your risk of catching or spreading
        COVID-19.  `,
        "Should I worry about COVID-19?" : `Illness due to COVID-19 infection is generally mild, especially for
        children and young adults. However, it can cause serious illness:
        about 1 in every 5 people who catch it need hospital care. It is
        therefore quite normal for people to worry about how the COVID-19
        outbreak will affect them and their loved ones.`,
        "Who is at risk of developing severe illness" : `While we are still learning about how COVID-2019 affects people,
        older persons and persons with pre-existing medical conditions (such
        as high blood pressure, heart disease, lung disease, cancer or
        diabetes) appear to develop serious illness more often than others.`,
        "Are antibiotics effective in preventing or treating the COVID-19?" : `No. Antibiotics do not work against viruses, they only work on
        bacterial infections. COVID-19 is caused by a virus, so antibiotics do
        not work. Antibiotics should not be used as a means of prevention or
        treatment of COVID-19. They should only be used as directed by a
        physician to treat a bacterial infection. `,
        "Are there any medicines or therapies that can prevent or cure COVID-19" : `While some western, traditional or home remedies may provide
        comfort and alleviate symptoms of COVID-19, there is no evidence
        that current medicine can prevent or cure the disease. We does not
        recommend self-medication with any medicines, including antibiotics,
        as a prevention or cure for COVID-19. However, there are several
        ongoing clinical trials that include both western and traditional
        medicines. We will continue to provide updated information as soon
        as clinical findings are available. `,
        "Is there a vaccine drug or treatment for COVID-19" : `Not yet. To date, there is no vaccine and no specific antiviral medicine
        to prevent or treat COVID-2019. However, those affected should
        receive care to relieve symptoms. People with serious illness should
        be hospitalized. Most patients recover thanks to supportive care. `,
        "Is COVID-19 the same as SARS?" : `No. The virus that causes COVID-19 and the one that caused the
        outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are
        related to each other genetically, but the diseases they cause are
        quite different. `,
        "Should I wear mask to protect myself" : `Only wear a mask if you are ill with COVID-19 symptoms (especially
            coughing) or looking after someone who may have COVID-19.
            Disposable face mask can only be used once. If you are not ill or
            looking after someone who is ill then you are wasting a mask. There is
            a world-wide shortage of masks, so We urge people to use masks
            wisely. `,
        "How long is the incubation period for COVID-19?" : `The “incubation period” means the time between catching the virus
        and beginning to have symptoms of the disease. Most estimates of
        the incubation period for COVID-19 range from 1-14 days, most
        commonly around five days. These estimates will be updated as more
        data become available. `,
        "How to put on use take off and dispose of a mask?" : `
            1. Remember, a mask should only be used by health workers, care takers,
            and individuals with respiratory symptoms, such as fever and cough
            2. Before touching the mask, clean hands with an alcohol-based
            hand rub or soap and water 
            3. Take the mask and inspect it for tears or holes.
            4. Orient which side is the top side (where the metal strip is). 
            5. Ensure the proper side of the mask faces outwards (the
                coloured side).
                6. Place the mask to your face. Pinch the metal strip or stiff edge of
            the mask so it moulds to the shape of your nose.
            7. Pull down the mask’s bottom so it covers your mouth and your
            chin.
            8. After use, take off the mask; remove the elastic loops from
            behind the ears while keeping the mask away from your face
            and clothes, to avoid touching potentially contaminated surfaces
            of the mask.
            9. Discard the mask in a closed bin immediately after use.
            10. Perform hand hygiene after touching or discarding the
            mask – Use alcohol-based hand rub or, if visibly soiled, wash
            your hands with soap and water. `,
        "Can humans become infected with the COVID-19 from an animal source?" : `Coronaviruses are a large family of viruses that are common in
        animals. Occasionally, people get infected with these viruses which 
        may then spread to other people. For example, SARS-CoV was
        associated with civet cats and MERS-CoV is transmitted by
        dromedary camels. Possible animal sources of COVID-19 have not
        yet been confirmed.`,
        "Can I catch COVID-19 from my pet?" : `While there has been one instance of a dog being infected in Hong
        Kong, to date, there is no evidence that a dog, cat or any pet can
        transmit COVID-19. COVID-19 is mainly spread through droplets
        produced when an infected person coughs, sneezes, or speaks. To
        protect yourself, clean your hands frequently and thoroughly.
        We continues to monitor the latest research on this and other COVID19 topics and will update as new findings are available.`,
        "How long does the virus survive on surfaces?" : `It is not certain how long the virus that causes COVID-19 survives on
        surfaces, but it seems to behave like other corona viruses. Studies
        suggest that corona viruses (including preliminary information on the
        COVID-19 virus) may persist on surfaces for a few hours or up to
        several days. This may vary under different conditions (e.g. type of
        surface, temperature or humidity of the environment). 
        `,
        "Is it safe to receive a package from any area where COVID-19 has been reported?" : `Yes. The likelihood of an infected person contaminating commercial
        goods is low and the risk of catching the virus that causes COVID-19
        from a package that has been moved, travelled, and exposed to
        different conditions and temperature is also low. `,
        "Is there anything I should not do?" : `Smoking
        • Wearing same mask again `,
        "What I need to do if i am feeling fever?" : `In any case, if you have fever, cough and difficulty breathing
        seek medical care early to reduce the risk of developing a more
        severe infection and be sure to share your recent travel history with
        your health care provider. `,
        "Can I catch COVID-19 from pets?" : `Research on this and other COVID19 topics and will update as new findings are available.`,
        "How long does the virus survive on surfaces?" : `It is not certain how long the virus that causes COVID-19 survives on
        surfaces, but it seems to behave like other corona viruses. Studies
        suggest that corona viruses (including preliminary information on the
        COVID-19 virus) may persist on surfaces for a few hours or up to
        several days. This may vary under different conditions (e.g. type of
        surface, temperature or humidity of the environment).
        `,
        "How to cure this virus?" : `There is no cure for this virus yet, lot of rsearch is going on, temporarily Hidroxy Chloro Quine is useing.`,
        "How does this test work?" : `Molecular testing is based on the reverse transcription polymerase chain reaction (RT-PCR). SARS-CoV-2 contains a single strand of RNA which holds the genetic code for the proteins the virus needs to replicate.
        The tests are mostly done in specialised laboratories. They require skilled experienced laboratory professionals and expensive equipmen`,
        "What are the biggest challenges?" : `Not all laboratories are able to offer these tests. Another challenge is that the tests require skilled professionals and equipment. And there are limited test kits.Because of the shortage of testing kits, the World Health Organisation has advised that tests should only be done when people show symptoms, are at high risk or are suspected of having been infected. Another challenge is that the tests can take three to four days to process. This is a long time given the highly infectious nature of the virus.`,
        "What is needed? What is next?" : `There’s an urgent need for more rapid and widespread testing. In countries such as South Korea, where extensive testing was available, the government was more effective in controlling the spread and infection rate. Widespread testing of individuals – not only those showing symptoms – could reveal the true size of the pandemic and allow epidemiologists to predict and control the spread.`,
        "How are the new tests being developed?": `Researchers have begun by isolating and modifying sections of the spike proteins which are part of the outer surface of the virus. These proteins can be multiplied by using cells which are cultured in a laboratory. After this, the proteins are isolated and then fixed onto a solid surface.

        The next step would be to add serum, which is separated from a blood sample.`,
        "Is coughing a symptom of the coronavirus disease?" : `The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually.`,
        "What is the first approved drug?" : `The National Medical Products Administration of China has approved the use of Favilavir, an anti-viral drug, as a treatment for coronavirus. The drug has reportedly shown efficacy in treating the disease with minimal side effects in a clinical trial involving 70 patients. The clinical trial is being conducted in Shenzhen, Guangdong province.`,
        "What is the Abbreviations of COVID-19?" : `coronavirus disease of 2019.`,
        "Who named COVID-19?" : `The coronavirus disease of 2019 was given the abbreviated name of COVID-19 by the WHO in a press release on February 11, 2020.`,
        "When was the coronavirus given the “COVID-19” name?" : `On December 31, 2019, a strange new pneumonia of unknown cause was reported to the Chinese WHO Country Office. A cluster of these cases originally appeared in Wuhan, a city in the Hubei Province of China. These infections were found to be caused by a new coronavirus which was given the name “2019 novel coronavirus” (2019-nCoV). `,
        "Why was the coronavirus renamed to COVID-19?" : `The WHO press release of February 11 explained why a new name was needed for this disease: “to enable discussion on disease prevention, spread, transmissibility, severity, and treatment.”

        Diseases are officially named by WHO in the International Classification of Diseases (ICD). For COVID-19, the name was decided based on agreed guidelines between the WHO, the World Organization for Animal Health, and the Food and Agriculture Organization of the United Nations. The name, and its abbreviation, was chosen because it didn’t refer to a specific geographic location, a specific animal, or a specific group of people. It also had to be easy to pronounce and related to the disease.`,
        "How does corona virus came?" : `It came from Hunan market in Wuhan. It is a sea food market.`,
        "When the virus exits or stops spreading" : `I cannot stops until the vaccine came`,
        "How many persons does a corona patient can effect?" : `According to survey from WHO, under no lockdown each person
        can effect 486 persons, under lockdown each person can effect 2.6 people at a rate 10 people can effect 26 people`,
        "How can I protect myself?" : `It will be updated.`,
        "Am I risk of COVID-19?" : `This is a rapidly evolving situation and the risk assessment may change daily. The latest updates are available on CDC’s Coronavirus Disease 2019 (COVID-19) website.`,
        "How many cases reported till now in World?" : `See updates in cases tab`,
        "How many cases reported in India?": `see updates in cases tab`,
        "where the corona virus is originated?" : `It is originated from Hunan market in Wuhan, China. It is a sea food market.`, 
        "Is there a treatment for a novel coronavirus?": `There is no specific treatment for disease caused by a novel coronavirus.
        However, many of the symptoms can be treated and therefore treatment based on the patient’s clinical condition. Moreover, 
        supportive care for infected persons can be highly effective`,
        "Medication1 :Chloroquine approved for emergency use by US FDA":`The US Food and Drug Administration (FDA) approved 
        limited emergency use for chloroquine and hydroxychloroquine as a treatment for COVID-19.`,
        "Medication2 :Favilavir, the first approved coronavirus drug in China":`The National Medical Products Administration of China has approved the use of Favilavir, an anti-viral drug, 
        as a treatment for coronavirus. The drug has reportedly shown efficacy in treating the disease with minimal side effects in a clinical trial involving 70 patients. 
        The clinical trial is being conducted in Shenzhen, Guangdong province.`,
        "What can I do to protect myself?":`Standard recommendations to reduce exposure to and transmission of a range of illnesses include maintaining basic hand and respiratory hygiene, 
        and safe food practices  and avoiding close contact,
        when possible, with anyone showing symptoms of respiratory illness such as coughing and sneezing.`,
        "Clinical management of severe acute respiratory infection when COVID-19 is suspected":`This document is intended for clinicians 
        taking care of hospitalised adult and paediatric patients with severe acute respiratory infection (SARI) when a nCoV infection is suspected. 
        It is not meant to replace clinical judgment or specialist consultation but rather to strengthen clinical management of these patients and provide to up-to-date guidance. 
        Best practices for SARI including IPC and optimized supportive care for severely ill patients are essential. `,
        "Clinical care of severe acute respiratory infections – Tool kit": `This toolkit is intended for clinicians working in acute care hospitals in low- and middle-income countries,
        managing adult and paediatric patients with acute respiratory infection, including severe pneumonia, acute respiratory distress syndrome, 
        sepsis and septic shock. The main objective is to provide some of the necessary tools that can be used to care for the critically ill patient from hospital entry to hospital discharge.`,
        "Recommendations: Prehospital Emergency Medical Services (EMS) COVID-19":`General guidance for Emergency Medical Service (EMS) preparedness and response to COVID-19 and is directed to EMS providers.
        Prehospital workers, including EMS personnel and other emergency responders, may potentially be exposed to the disease through patient contact or through contaminated environments.
        It is paramount that providers follow specific practice guidelines to mitigate the effects of an escalating pandemic.`,
        "Maintaining a safe and adequate blood supply during the pandemic outbreak of coronavirus disease (COVID-19) ":`the management of the blood supply in response to the pandemic outbreak of coronavirus disease (COVID-19). 
        It emphasizes the importance of being prepared and responding quickly and outlines key actions and measures 
        that the blood services should take to mitigate the potential risk to the safety and sufficiency of the blood supplies during the pandemic. `,
        "Safety at Grocery Shops":`When grocery shopping, keep at least 1-metre distance from others and avoid touching your eyes, mouth and nose. 
        If possible, sanitize the handles of shopping trolleys or baskets before shopping. Once home, wash your hands thoroughly and also after handling and storing your purchased products. 
        There is currently no confirmed case of COVID-19 transmitted through food or food packaging.`,
        "Corona virus explained, What you should do? " : ""
        };
    }
}

function cases() {

    fetch("https://api.covid19india.org/data.json")
    .then(response => response.json())
    .then(data => {
        var covid = data.statewise[0];



        var conf = document.getElementById("confirmed");
        var act = document.getElementById("active");
        var rev = document.getElementById("recovered");
        var dec = document.getElementById("deaths");

        var c = covid.confirmed;
        var a = covid.active;
        var r = covid.recovered;
        var d = covid.deaths;

        var i=0,y=500;
        function showCases(x) {
            conf.innerHTML = c-x;
            act.innerHTML = a-x;
            rev.innerHTML = r-x;
            dec.innerHTML = d-x;
        }

        showCases(y);

        function execute() {

        if(i<500) {
            setTimeout(function() {
                execute();
            },0.0);
        }
        conf.innerHTML = Number(c-500)+i;
        act.innerHTML = Number(a-500)+i;
        rev.innerHTML = Number(r-500)+i;
        dec.innerHTML = Number(d-500)+i; 
        i++;
        }

        execute();

        var len = data.cases_time_series.length,i;

        google.charts.load('current', {
                'packages':['corechart']
            });
        google.charts.setOnLoadCallback(drawChart);
    
        function drawChart() {
    
            var value0 = [
                ['Days', 'Total Confirmed']
            ]
    
            var value1 = [
                ['Days', 'Total Active']
            ]
    
            var value2 = [
                ['Days', 'Total Recovered']
            ]
    
            var value3 = [
                ['Days', 'Total Deceased']
            ]

            var x,y,z;

            for(i=0;i<len;i+=Math.floor(len/15)) {
                x=Number(data.cases_time_series[i].totalconfirmed);
                y=Number(data.cases_time_series[i].totalrecovered);
                z=Number(data.cases_time_series[i].totaldeceased);
                value0.push([i+"", x]);
                value1.push([i+"", x-(y+z)])
                value2.push([i+"", y]);
                value3.push([i+"", z]);
            }
            
            x=Number(data.cases_time_series[len-1].totalconfirmed);
            y=Number(data.cases_time_series[len-1].totalrecovered);
            z=Number(data.cases_time_series[len-1].totaldeceased);

            value0.push(['Till Yesterday', x]);
            value1.push(['Till Yesterday', x-(y+z)]);
            value2.push(['Till Yesterday', y]);
            value3.push(['Till Yesterday', z]);

    
            var confirmed = google.visualization.arrayToDataTable(value0);
    
            var active = google.visualization.arrayToDataTable(value1);
    
            var recovered = google.visualization.arrayToDataTable(value2);
    
            var deaths = google.visualization.arrayToDataTable(value3); 
    
            var options1 = {
                curveType: 'function',
                legend: { position: 'none' },
                series: {
                    0: {color: "rgb(194, 14, 14)"}
                },
                backgroundColor: "rgb(250, 206, 206)",
                hAxis: {
                    title: 'Days'
                },
                vAxis: {
                    title: 'Confirmed'
                }
            };
    
            var options2 = {
                curveType: 'function',
                legend: { position: 'none' },
                series: {
                    0: {color: "rgb(35, 35, 211)"}
                },
                backgroundColor: "rgb(209, 209, 255)",
                hAxis: {
                    title: 'Days'
                },
                vAxis: {
                    title: 'Recovered'
                }
            };
    
            var options3 = {
                curveType: 'function',
                legend: { position: 'none' },
                series: {
                    0: {color: "rgb(8, 143, 8)"}
                },
                backgroundColor: "rgb(198, 248, 198)",
                hAxis: {
                    title: 'Days'
                },
                vAxis: {
                    title: 'Active'
                }
            };
    
            var options4 = {
                curveType: 'Days',
                legend: { position: 'none' },
                backgroundColor: "rgb(212, 212, 212)",
                hAxis: {
                    title: 'Days'
                },
                series: {
                    0: {color: "rgb(75, 71, 71)"}
                },
                vAxis: {
                    title: 'Deceased'
                }
            };
    
            var chart0 = new google.visualization.LineChart(document.getElementById('curve_chart0'));
    
            var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart1'));
    
            var chart2 = new google.visualization.LineChart(document.getElementById("curve_chart2"));
    
            var chart3 = new google.visualization.LineChart(document.getElementById("curve_chart3")); 
    
            chart0.draw(confirmed, options1);
    
            chart1.draw(active, options2);
    
            chart2.draw(recovered, options3);
    
            chart3.draw(deaths, options4); 
        } 
        window.addEventListener("resize", function() {
            drawChart();
        });
    });

    fetch("https://disease.sh/v2/all")
    .then(response => response.json())
    .then(data => {
        var covid = data;

        var conf = document.getElementById("confirmed1");
        var act = document.getElementById("active1");
        var rev = document.getElementById("recovered1");
        var dec = document.getElementById("deaths1");

        var c = covid.cases;
        var a = covid.active;
        var r = covid.recovered;
        var d = covid.deaths

        var i=0,y=500;
        function showCases(x) {
            conf.innerHTML = c-x;
            act.innerHTML = a-x;
            rev.innerHTML = r-x;
            dec.innerHTML = d-x;
        }

        showCases(y);

        function execute() {

            if(i<500) {
                setTimeout(function() {
                    execute();
                },0.8);
            }
            conf.innerHTML = Number(c-500)+i;
            act.innerHTML = Number(a-500)+i;
            rev.innerHTML = Number(r-500)+i;
            dec.innerHTML = Number(d-500)+i; 
            i++;
        }

        execute();

        fetch("https://pomber.github.io/covid19/timeseries.json")
        .then(response => response.json())
        .then(data => {

            var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","US","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

            var timeSeriesConfirmed = [];
            var timeSeriesRecovered = [];
            var timeSeriesDeaths = [];
            for(var days=0;days<data["US"].length;days++) {
                var conf=0, rec=0, death=0;
                for(var j=0;j<250;j++) {
                    if(data[country_list[j]]) {
                        conf+=data[country_list[j]][days].confirmed;
                        rec+=data[country_list[j]][days].recovered;
                        death+=data[country_list[j]][days].deaths;
                    }
                }
                timeSeriesConfirmed.push(conf);
                timeSeriesRecovered.push(rec);
                timeSeriesDeaths.push(death);
            } 

            google.charts.load('current', {
                'packages':['corechart']
            });
            google.charts.setOnLoadCallback(drawChart);
        
            function drawChart() {
        
                var value0 = [
                    ['Days', 'Total Confirmed']
                ]
        
                var value1 = [
                    ['Days', 'Total Active']
                ]
        
                var value2 = [
                    ['Days', 'Total Recovered']
                ]
        
                var value3 = [
                    ['Days', 'Total Deceased']
                ]
    
                var x,y,z,len = timeSeriesConfirmed.length;
                for(i=0;i<len;i+=Math.floor(len/15)) {
                    x=timeSeriesConfirmed[i];
                    y=timeSeriesRecovered[i];
                    z=timeSeriesDeaths[i];
                    value0.push([i+"", x]);
                    value1.push([i+"", x-(y+z)])
                    value2.push([i+"", y]);
                    value3.push([i+"", z]);
                }
                
                x=timeSeriesConfirmed[len-1];
                y=timeSeriesRecovered[len-1];
                z=timeSeriesDeaths[len-1];
    
                value0.push(['Till Yesterday', x]);
                value1.push(['Till Yesterday', x-(y+z)]);
                value2.push(['Till Yesterday', y]);
                value3.push(['Till Yesterday', z]);
    
                var confirmed = google.visualization.arrayToDataTable(value0);
        
                var active = google.visualization.arrayToDataTable(value1);
        
                var recovered = google.visualization.arrayToDataTable(value2);
        
                var deaths = google.visualization.arrayToDataTable(value3); 
        
                var options1 = {
                    curveType: 'function',
                    legend: { position: 'none' },
                    series: {
                        0: {color: "rgb(194, 14, 14)"}
                    },
                    backgroundColor: "rgb(250, 206, 206)",
                    hAxis: {
                        title: 'Days'
                    },
                    vAxis: {
                        title: 'Confirmed'
                    }
                };
        
                var options2 = {
                    curveType: 'function',
                    legend: { position: 'none' },
                    series: {
                        0: {color: "rgb(35, 35, 211)"}
                    },
                    backgroundColor: "rgb(209, 209, 255)",
                    hAxis: {
                        title: 'Days'
                    },
                    vAxis: {
                        title: 'Recovered'
                    }
                };
        
                var options3 = {
                    curveType: 'function',
                    legend: { position: 'none' },
                    series: {
                        0: {color: "rgb(8, 143, 8)"}
                    },
                    backgroundColor: "rgb(198, 248, 198)",
                    hAxis: {
                        title: 'Days'
                    },
                    vAxis: {
                        title: 'Active'
                    }
                };
        
                var options4 = {
                    curveType: 'Days',
                    legend: { position: 'none' },
                    backgroundColor: "rgb(212, 212, 212)",
                    hAxis: {
                        title: 'Days'
                    },
                    series: {
                        0: {color: "rgb(75, 71, 71)"}
                    },
                    vAxis: {
                        title: 'Deceased'
                    }
                };
        
                var chart0 = new google.visualization.LineChart(document.getElementById('curve_chart4'));
        
                var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart5'));
        
                var chart2 = new google.visualization.LineChart(document.getElementById("curve_chart6"));
        
                var chart3 = new google.visualization.LineChart(document.getElementById("curve_chart7")); 
        
                chart0.draw(confirmed, options1);
        
                chart1.draw(active, options2);
        
                chart2.draw(recovered, options3);
        
                chart3.draw(deaths, options4); 
            }
        
        
            window.addEventListener("resize", function() {
                drawChart();
            }); 
        })
    });
}

function rate() {

    fetch("https://disease.sh/v2/countries")
    .then(response => response.json())
    .then(data => {

        var selLeft = document.getElementById("select-left");
        var selRight = document.getElementById("select-right");

        var countryLeft = getId("countryLeft");
        var countryRight = getId("countryRight");

        var countryFlagLeft = getId("countryFlagLeft");
        var countryFlagRight = getId("countryFlagRight");

        var confLeft = getId("casesLeft");
        var confPMLeft = getId("casesPMLeft");
        var confRight = getId("casesRight");
        var confPMRight = getId("casesPMRight");

        var actLeft = getId("activeLeft");
        var actPMLeft = getId("activePMLeft");
        var actRight = getId("activeRight");
        var actPMRight = getId("activePMRight");

        var recLeft = getId("recoveredLeft");
        var recPMLeft = getId("recoveredPMLeft");
        var recRight = getId("recoveredRight");
        var recPMRight = getId("recoveredPMRight");

        var deathLeft = getId("deathsLeft");
        var deathPMLeft = getId("deathsPMLeft");
        var deathRight = getId("deathsRight");
        var deathPMRight = getId("deathsPMRight");

        var testLeft = getId("testLeft");
        var testPMLeft = getId("testPMLeft");
        var testRight = getId("testRight");
        var testPMRight = getId("testPMRight");

        var cLeft = getId("c-left");
        var cRight = getId("c-right");
        var aLeft = getId("a-left");
        var aRight = getId("a-right");
        var rLeft = getId("r-left");
        var rRight = getId("r-right");
        var dLeft = getId("d-left");
        var dRight = getId("d-right");
        var tLeft = getId("t-left");
        var tRight = getId("t-right");

        var cTic = getId("c-tic");
        var cWrong = getId("c-wrong");
        var aTic = getId("a-tic");
        var aWrong = getId("a-wrong");
        var rTic = getId("r-tic");
        var rWrong =getId("r-wrong");
        var dTic = getId("d-tic");
        var dWrong = getId("d-wrong");
        var tTic = getId("t-tic");
        var tWrong = getId("t-wrong");

        var img1,img2;

        function getId(id) {
            return document.getElementById(id);
        }

        for(var i=0;i<data.length;i++) {
            var option1 = document.createElement("option");
            var option2 = document.createElement("option");
            option1.innerHTML = data[i].country;
            option2.innerHTML = data[i].country;

            selLeft.appendChild(option1);
            selRight.appendChild(option2);
        }

        selLeft.addEventListener("change", () => {
            if(img1&&img2) {
                for(var i=1;i<=5;i++) {
                    img1 = document.getElementById('l'+i);
                    img2 = document.getElementById('r'+i);

                    img1.remove();
                    img2.remove();
                }
            }

            if(selLeft.value === selRight.value && selLeft.value!="Select Country") {
                alert("Country names are equal");
                removeLeft();
            }
            else {

                if(selLeft.value === "Select Country") {
                    removeLeft();
                }

                for(var i=0;i<data.length;i++) {
                    if(selLeft.value === data[i].country) {
                        countryLeft.innerHTML = selLeft.value;
                        countryFlagLeft.src = data[i].countryInfo.flag;

                        confLeft.innerHTML = data[i].cases;
                        confPMLeft.innerHTML = data[i].casesPerOneMillion;

                        actLeft.innerHTML = data[i].active;
                        var percentageLeft = (Number(actLeft.innerHTML)*100)/(Number(confLeft.innerHTML));

                        var active = Math.round((Number(confPMLeft.innerHTML)*percentageLeft)/100);

                        actPMLeft.innerHTML = active;


                        recLeft.innerHTML = data[i].recovered;
                        percentageLeft = (Number(recLeft.innerHTML)*100)/(Number(confLeft.innerHTML));

                        var recovered = Math.round((Number(confPMLeft.innerHTML)*percentageLeft)/100);
                        recPMLeft.innerHTML = recovered;

                        deathLeft.innerHTML = data[i].deaths;
                        deathPMLeft.innerHTML = data[i].deathsPerOneMillion;

                        testLeft.innerHTML = data[i].tests;
                        testPMLeft.innerHTML = data[i].testsPerOneMillion;
                        break;
                    }
                }
            }


            if(selLeft.value!=="Select Country" && selRight.value!=="Select Country") calculate();

            removeLeft = () => {
                selLeft.value = "Select Country"
                countryLeft.innerHTML = "";
                countryFlagLeft.src = "";

                confLeft.innerHTML = "No Data";
                confPMLeft.innerHTML = "No Data";

                actLeft.innerHTML = "No Data";
                actPMLeft.innerHTML = "No Data ";

                recLeft.innerHTML = "No Data";
                recPMLeft.innerHTML = "No Data";

                deathLeft.innerHTML = "No Data";
                deathPMLeft.innerHTML = "No Data";

                testLeft.innerHTML = "No Data";
                testPMLeft.innerHTML = "No Data";

                if(img1&&img2) {
                    for(var i=1;i<=5;i++) {
                        img1 = document.getElementById('l'+i);
                        img2 = document.getElementById('r'+i);
                        
                        try {
                            img1.remove();
                            img2.remove();
                        }
                        catch(err) {
                            console.log("countryLeft");
                        }
                    }
                }
            }
        });

        selRight.addEventListener("change", () => {
            if(img1&&img2) {
                for(var i=1;i<=5;i++) {
                    img1 = document.getElementById('l'+i);
                    img2 = document.getElementById('r'+i);

                    img1.remove();
                    img2.remove();
                }
            }

            if(selLeft.value === selRight.value && selRight.value!="Select Country") {
                alert("Country names are equal");
                removeRight();
            }
            else {

                if(selRight.value === "Select Country") {
                    removeRight();
                }

                for(var i=0;i<data.length;i++) {
                    if(selRight.value === data[i].country) {
                        countryRight.innerHTML = selRight.value;
                        countryFlagRight.src = data[i].countryInfo.flag;
                        confRight.innerHTML = data[i].cases;
                        confPMRight.innerHTML = data[i].casesPerOneMillion;

                        actRight.innerHTML = data[i].active;
                        var percentageRight = (Number(actRight.innerHTML)*100)/(Number(confRight.innerHTML));

                        var active = Math.round((Number(confPMRight.innerHTML)*percentageRight)/100);

                        actPMRight.innerHTML = active;

                        recRight.innerHTML = data[i].recovered;
                        percentageRight = (Number(recRight.innerHTML)*100)/(Number(confRight.innerHTML));


                        var recovered = Math.round((Number(confPMRight.innerHTML)*percentageRight)/100);

                        recPMRight.innerHTML = recovered;

                        deathRight.innerHTML = data[i].deaths;
                        deathPMRight.innerHTML = data[i].deathsPerOneMillion;

                        testRight.innerHTML = data[i].tests;
                        testPMRight.innerHTML = data[i].testsPerOneMillion;
                        break;
                    }
                }
            } 


            if(selLeft.value!=="Select Country" && selRight.value!=="Select Country") calculate();

            removeRight = () => {
                selRight.value = "Select Country";
                countryRight.innerHTML = "";
                countryFlagRight.src = "";

                confRight.innerHTML = "No Data";
                confPMRight.innerHTML = "No Data";

                actRight.innerHTML = "No Data";
                actPMRight.innerHTML = "No Data";

                recRight.innerHTML = "No Data"
                recPMRight.innerHTML = "No Data";

                deathRight.innerHTML = "No Data";
                deathPMRight.innerHTML = "No Data";

                testRight.innerHTML = "No Data";
                testPMRight.innerHTML = "No Data";

                if(img1&&img2) {
                    for(var i=1;i<=5;i++) {
                        img1 = document.getElementById('l'+i);
                        img2 = document.getElementById('r'+i);
    
                        try {
                            img1.remove();
                            img2.remove();
                        }
                        catch(err) {
                            console.log("countrRight");
                        }
                    }
                }
            }
        });

        function calculate() {
            var leftCountry=0, rightCountry=0;
            function tic() {
                return "tic.png";
            }

            function wrong() {
                return "wrong.png";
            }

            function getImg() {
                return document.createElement("img");
            }

            function result(left, right, float, idName) {
                img1 = getImg();
                img1.id = 'l'+idName;
                img1.className = "tic";
                img1.src = tic();

                img2 = getImg();
                img2.id = 'r'+idName;
                img2.className = "wrong float-".concat(float);
                img2.src = wrong();

                left.appendChild(img1);
                right.appendChild(img2);
            }

            function resultMiddle(left, right, idName) {
                img1 = getImg();
                img1.id = 'l'+idName;
                img1.className = "tic";
                img1.src = tic();

                img2 = getImg();
                img2.id = 'r'+idName;
                img2.className = "tic";
                img2.src = tic();

                left.appendChild(img1);
                right.appendChild(img2);
            }

            if(Number(confPMLeft.innerHTML)<Number(confPMRight.innerHTML)) {
                rightCountry++;
                result(cLeft, cRight, "right", "1");
            }
            else if(Number(confPMLeft.innerHTML)==Number(confPMRight.innerHTML)) {
                leftCountry++;
                rightCountry++;
                resultMiddle(cLeft, cRight, "1");
            }
            else {
                leftCountry++;
                result(cRight, cLeft, "left", "1");
            }  

            if(Number(actPMLeft.innerHTML)<Number(actPMRight.innerHTML)) {
                rightCountry++;
                result(aLeft, aRight, "right", "2");
            }
            else if(Number(actPMLeft.innerHTML)==Number(actPMRight.innerHTML)) {
                leftCountry++;
                rightCountry++;
                resultMiddle(aLeft, aRight, "2");
            }
            else {
                leftCountry++;
                result(aRight, aLeft, "left", "2");
            }

            if((Number(confPMLeft.innerHTML)*(recPMLeft.innerHTML))/100>(Number(confPMRight.innerHTML)*Number(recPMRight.innerHTML))/100) {
                rightCountry++;
                result(rLeft, rRight, "right", "3");
            }
            else if((Number(confPMLeft.innerHTML)*(recPMLeft.innerHTML))/100==(Number(confPMRight.innerHTML)*Number(recPMRight.innerHTML))/100) {
                leftCountry++;
                rightCountry++;
                resultMiddle(rLeft, rRight, "3");
            }
            else {
                leftCountry++;
                result(rRight, rLeft, "left", "3");
            }

            if(Number(deathPMLeft.innerHTML)<Number(deathPMRight.innerHTML)) {
                rightCountry++;
                result(dLeft, dRight, "right", "4");
            }
            else if(Number(deathPMLeft.innerHTML)==Number(deathPMRight.innerHTML)) {
                leftCountry++;
                rightCountry++;
                resultMiddle(dLeft, dRight, "4");
            }
            else {
                leftCountry++
                result(dRight, dLeft, "left", "4");
            }

            if(Number(testPMLeft.innerHTML)>Number(testPMRight.innerHTML)) {
                rightCountry++;
                result(tLeft, tRight, "right", "5");
            }
            else if(Number(testPMLeft.innerHTML)==Number(testPMRight.innerHTML)) {
                leftCountry++;
                rightCountry++;
                resultMiddle(tLeft, tRight, "5");
            }
            else {
                leftCountry++;
                result(tRight, tLeft, "left", "5");
            }
            
            var final = getId("final-outcome");

            if(leftCountry>rightCountry) {
                final.innerHTML = "More Spread in "+selLeft.value;
            }
            else if(leftCountry==rightCountry) {
                final.innerHTML = "Equal Spread in both the Countries";
            }
            else {
                final.innerHTML = "More Spread in "+selRight.value;
            }
        }
    })
}
