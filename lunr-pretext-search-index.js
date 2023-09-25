var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Sean Maley, M.A.  Qualified MBSR Teacher (Brown University)  SUNY Finger Lakes        "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Potential Benefits",
  "body": " Potential Benefits  MBSR stands for Mindfulness-Based Stress Reduction, a program developed by Jon Kabat-Zinn in 1979. The program combines mindfulness meditation and yoga to help individuals manage stress, anxiety, and other mental health concerns.  As we will see, achieving goals or grasping at outcomes runs counter to mindful living, and therefore the healing process. But, when the course is followed and the practices are taken sincerely, many participants do experience very positive outcomes. Just know if you go seeking these things, seemingly paradoxically, that in fact might be the very mindset holding you back.  Some potential benefits of MBSR are:   Reduced Stress: MBSR has been shown to reduce stress in individuals who practice it regularly. Participants in MBSR programs have reported feeling more relaxed, calm, and better able to cope with stressful situations.  Improved Mental Health: MBSR has been found to be effective in reducing symptoms of depression, anxiety, and other mental health conditions. It can help individuals develop greater awareness of their thoughts and emotions, leading to a greater sense of self-awareness and self-regulation.  Improved Physical Health: MBSR has been found to have physical health benefits as well. It has been associated with reduced blood pressure, improved sleep quality, and improved immune system function.  Increased Emotional Resilience: MBSR can help individuals develop greater emotional resilience, which refers to the ability to adapt to challenging or difficult situations. By developing mindfulness skills, individuals can learn to stay present and non-judgmental during difficult times, which can help them to bounce back from adversity more quickly.   MBSR has been found to be a helpful tool for managing stress and promoting overall health and wellbeing. It is important to note that MBSR is not a replacement for medical treatment and individuals with mental health concerns should consult with a healthcare provider before beginning any new treatment program.  "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Potential Risks",
  "body": "Potential Risks  While MBSR can be beneficial for many people, there are some potential risks to be aware of:   Unpleasant emotions: During mindfulness meditation, individuals may become more aware of unpleasant thoughts or emotions. While this can be uncomfortable, it is a natural part of the process and can help individuals learn to better manage difficult feelings.  Increased anxiety: In some cases, individuals with anxiety may find that mindfulness meditation initially increases their symptoms. This is usually temporary and can be managed with support from a qualified MBSR instructor or mental health professional. It is common that we have unwanted emotions that we are suppressing actively, and once we relax, these may find their way to the surface.  Religious or cultural conflicts: Some individuals may have concerns that MBSR is based on religious or cultural practices that conflict with their personal beliefs. It is important to note that MBSR is secular and does not require any particular spiritual or cultural background.  Social Risks: As one of the outcomes is a changed relationship to stressors, people may be temporarily upset or uncomfortable with our new ways of responding. Also there may be pressure around creating space for practices, which is unavoidable as time is often very limited for most of us busy folk.  Not a substitute for medical treatment: While MBSR can be helpful for managing stress and anxiety, it is not a substitute for medical treatment. Individuals with mental health concerns should consult with a healthcare provider before beginning any new treatment program.   MBSR is generally considered safe and beneficial for most individuals. However, it is important to work with a qualified MBSR instructor and to be aware of any potential risks or concerns before beginning the program.  "
},
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Section",
  "number": "1.3",
  "title": "Introduction and Orientation",
  "body": " Introduction and Orientation  Hello  "
},
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
