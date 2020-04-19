var inp = document.getElementById("input");

var ques = document.getElementById("question");

var ans = document.getElementById("answer");

var str = "";

var questions = Object.keys(results());

var answers = Object.values(results());

var liQ = document.getElementById("liQH");

var liA = document.getElementById("liAH");

inp.addEventListener("keydown", function() {
    
    var olQ = document.createElement("ol");
    olQ.id = "remQues";
    var olA = document.createElement("ol");
    olA.id = "remAns"

    var remQues = document.getElementById("remQues");
    var remAns = document.getElementById("remAns");
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

        for(var i=0;i<questions.length;i++) {
            if(counter[i]!=0) {
                var liQ = document.createElement("li");
                liQ.id = "liQH";
                var hrQ = document.createElement("hr");
                hrQ.className = "hr";
                ques.appendChild(olQ);
                olQ.appendChild(liQ);
                liQ.appendChild(document.createTextNode(questions[i]));
                olQ.appendChild(hrQ);
                var liA = document.createElement("li");
                var hrA = document.createElement("hr");
                liA.id = "liAH";
                hrA.className = "hr"
                ans.appendChild(olA);
                olA.appendChild(liA);
                liA.appendChild(document.createTextNode(answers[i]));
                olA.appendChild(hrA);
            }
        }
    }
    if(remQues&&remAns) {
        remQues.remove();
        remAns.remove();
    }
})



function results() {
    var QA = {
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
    "How to cure this virus?" : `There is no cure for this virus yet, lot of rsearch is going on, temporarily Hidroxy Chloro Quine is used.`,
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
    "How can I protect myself?" : ``,
    "Am I risk of COVID-19?" : `This is a rapidly evolving situation and the risk assessment may change daily. The latest updates are available on CDC’s Coronavirus Disease 2019 (COVID-19) website.`,
    "How many cases reported till now in World?" : `copy paste this link https://www.worldometers.info/coronavirus/`,
    "How many cases reported in India?": `copy paste this link https://covid19india.org`,
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
    };
    return QA;
}