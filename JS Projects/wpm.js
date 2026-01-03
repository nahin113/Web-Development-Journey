document.addEventListener("DOMContentLoaded",()=> {

    let inp = document.querySelector("input");

    let startTime = 0
    let timerInterval = 0
    let cnt = 59;
    let isTestRunning = false;


    let text = [
      "Focus is not something that randomly appears when we want it. It is built through habits, through a willingness to remove distractions, and through the discipline to continue even when things feel boring or repetitive. People often talk about motivation as the key to success, but motivation is unreliable. It comes and goes depending on mood, energy, and circumstances. Discipline, however, is stronger. Discipline is what keeps a person working when nobody is watching, when results are slow, and when quitting feels easier than continuing. Real progress happens quietly, in ordinary moments, when someone decides to be consistent instead of comfortable.",
      "Technology is evolving faster than at any other point in human history, yet human habits, emotions, and fears change very slowly. We create powerful tools that can solve massive problems, but those tools are only as effective as the people using them. The real challenge is not simply learning a new framework, programming language, or device. The real challenge is adjusting our mindset so we can adapt, think critically, and remain open to change. Many people fall behind not because they are incapable of learning, but because they resist change and cling to what feels comfortable. In a world that moves this quickly, refusing to adapt is the same as choosing to be left behind.",
      "Growth does not happen in dramatic moments filled with excitement and glory. It happens in slow, quiet periods when nothing impressive seems to be happening at all. Skills improve through repetition, through mistakes, and through the willingness to try again after failing. Most people underestimate how long real improvement takes, and they quit because progress feels invisible. But invisible progress is still progress. Every small effort adds up, every disciplined day matters, and every challenge shapes your ability to handle even bigger challenges in the future. Success is simply the result of refusing to stop when things get difficult.",
      "Building something meaningful requires more than just talent or intelligence. It requires patience, resilience, and the ability to stay calm when things break, fail, or behave in unexpected ways. Real builders do not panic when they encounter problems. They break the problem down, analyze the cause, and attack it piece by piece until it finally works. This mindset separates people who only start projects from those who actually finish them. Anyone can have ideas. Anyone can begin something new. But only disciplined and determined individuals have the mental endurance to push through frustration and complete what they started.",
      "The difference between people who improve and people who stay stuck usually has nothing to do with talent and everything to do with discipline. Most individuals love the idea of progress but hate the reality of consistency. They want results without repetition, confidence without effort, and success without discomfort. Real progress is boring most of the time. It is not dramatic, cinematic, or instantly rewarding. It looks like showing up again and again, even when nobody is watching, even when motivation is gone, and even when excuses sound very reasonable. People underestimate how powerful it is to simply not quit. If you keep learning, keep executing, and keep adjusting, you eventually outgrow your past weaknesses. Persistence turns average people into dangerous competitors.",
      "Technology has changed how we live, learn, and think, sometimes in ways we barely notice. We carry endless information in our pockets, yet our attention spans are shorter than ever. We have infinite learning resources available online, but most people waste that opportunity scrolling mindlessly. The same tools that can build skills, businesses, and careers are used mostly for entertainment. Convenience can make life easier, but it can also make people lazier. The challenge is not access anymore; the challenge is discipline. Anyone willing to use technology intentionally rather than passively already has a huge advantage.",
      "Everyone loves talking about goals, dreams, and ambitions, but few people are willing to tolerate the frustration that comes with actually chasing them. Progress rarely happens in straight lines. It is messy, unpredictable, and sometimes painfully slow. There will be days when everything feels pointless, when your efforts seem invisible, and when quitting feels easier than continuing. Those moments are filters. They separate the serious from the casual, the committed from the curious. Most people break at that stage. The few who do not eventually look “talented,” but in reality they just refused to stop.",
    ];


    let random = Math.floor(Math.random() * text.length);
    let randomText = text[random];
    let paragraph = document.querySelector("#text")

    randomText.split("").forEach(char=>{
        let span = document.createElement("span")
        span.innerText = char
        paragraph.appendChild(span)
    })

    let spans = document.querySelectorAll("span")

    let time = document.querySelector("#timer")
    let wpm = document.querySelector("#wpm")
    let accuracy = document.querySelector("#accuracy")
    let correctChars = 0;
    let totalTypedChars = 0
    

    inp.addEventListener("input", (e) => {

        const typed = inp.value;

        inp.classList.add("hidden")

        totalTypedChars = inp.value.length
        correctChars = 0

        if(typed.length >= 1 && !startTime)
        {
            startTime = Date.now()
            isTestRunning = true
            timerInterval = setInterval(updateStats,1000)
        }

        spans.forEach((s) => s.classList.remove("correct", "wrong", "active"));

        // console.log(typed)

        // console.log(spans)
        // console.log(paragraph)


           for(let i=0;i<spans.length;i++)
           {
                let char = typed[i]
                let expected = randomText[i]

                if(char == null) break

                if(char === expected)
                {
                    spans[i].classList.add("correct")
                    correctChars++
                }
                else {
                    spans[i].classList.add("wrong")
                }
           }

           if (typed.length < spans.length) {
             spans[typed.length].classList.add("active");
           }
           
    });

    document.querySelector("$restart").addEventListener("click",restartTest)

    function restartTest( {
      
    })

    function updateStats() {
      let acc = 100
      if(totalTypedChars > 0)
      {
         acc = Math.round((correctChars/totalTypedChars)*100)
      }
      accuracy.innerText = `Accuracy: ${acc}%`;
      if (cnt == 0) 
      {
        clearInterval(timerInterval)
        isTestRunning = false
        inp.disabled = true
        inp.blur()

        const wordsTyped = Math.floor(correctChars / 5);
        wpm.innerText = `Words Per Minute: ${wordsTyped}`;
        time.innerText = `Time: ${cnt}s`;
        
        paragraph.classList.add("hidden")
        document.querySelector("#info").classList.add("middle")
        document.querySelectorAll("div p").classList.add("highlight")
        // clearInterval(timerInterval)
      }
      else 
      {
        time.innerText = `Time: ${cnt}s`;
        cnt--
      }
    }

 
})
