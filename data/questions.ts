import { Question, QuestionModuleId } from '../types';

// Transformed Data from M1.questions.json
const module1Questions: Question[] = [
  {
    id: "M1-Q01",
    moduleId: 'correlation-causation',
    stem: "Given the well-documented inverse relationship between a nation's literacy rate and its infant mortality rate, many sociologists operate on the principle that a population's educational attainment is a key determinant of its public health outcomes.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "This is a tricky one. The sentence starts by describing a correlation (\"inverse relationship\"). However, it then presents a \"principle\" that reframes this relationship as causal. The key phrase is \"is a key determinant of.\" To determine something is to actively influence or cause it. You must analyze the claim being made, not just the evidence presented for it.",
    difficulty: 'Hard',
    deconstruction: {
      prompt: "Identify the two core elements of the principle being described.",
      cause: "A population's educational attainment.",
      effect: "Its public health outcomes."
    }
  },
  {
    id: "M1-Q02",
    moduleId: 'correlation-causation',
    stem: "The historical record indicates that major advancements in theoretical mathematics have a tendency to precede, often by decades, transformative breakthroughs in physics and engineering.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "The key word here is \"precede,\" which simply means \"to come before.\" This describes a temporal sequence (one thing happens, then another). While it might hint at a causal story, the statement itself only describes the order of events, which is a correlation.",
    difficulty: 'Easy',
    deconstruction: {
      prompt: "Identify the two events being linked in the historical record.",
      cause: "Major advancements in theoretical mathematics.",
      effect: "Transformative breakthroughs in physics and engineering."
    }
  },
  {
    id: "M1-Q03",
    moduleId: 'correlation-causation',
    stem: "The failure of the legislature to address loopholes in campaign finance law has, according to the ethics report, cultivated an environment in which policy decisions are increasingly responsive to corporate rather than public interests.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "This is a causal claim where the cause is a lack of action. The \"failure to address loopholes\" is presented as the agent. The active verb \"cultivated\" means that this failure actively created or fostered the new environment. It's an action (or inaction) producing an effect.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "According to the report, what is the cause and what is the effect?",
      cause: "The failure of the legislature to address loopholes in campaign finance law.",
      effect: "An environment where policy is responsive to corporate interests."
    }
  },
  {
    id: "M1-Q04",
    moduleId: 'correlation-causation',
    stem: "A persistent anomaly in the financial data is the degree to which the stock performance of luxury goods companies is tethered to fluctuations in the commodities market.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "The phrase \"is tethered to\" is a sophisticated metaphor for a very strong association. It's designed to feel causal, but logically, it just means the two things move together in a predictable way. It describes a state of affairs, not an active, forcing relationship.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "What two financial elements are described as being linked?",
      cause: "The stock performance of luxury goods companies.",
      effect: "Fluctuations in the commodities market."
    }
  },
  {
    id: "M1-Q05",
    moduleId: 'correlation-causation',
    stem: "The board's strategic decision to divest from its legacy manufacturing divisions was predicated on the argument that doing so would liberate capital and thereby fuel innovation in its emerging tech sector.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "The causal claim is embedded in the argument the board used. The core of that argument is that one action (divesting) would produce an effect (\"fuel innovation\"). To fuel something is to cause it to grow or become more active.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "Identify the cause and effect at the heart of the board's argument.",
      cause: "Divesting from legacy manufacturing divisions.",
      effect: "Fueling innovation in its emerging tech sector."
    }
  },
  {
    id: "M1-Q06",
    moduleId: 'correlation-causation',
    stem: "Among the patients who recovered from the novel virus, there is an unusually high prevalence of a specific, rare antibody, a finding that is the central focus of ongoing immunological research.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "Don't get distracted by the scientific jargon. This statement simply observes that two things—recovering from the virus and having a specific antibody—are found in the same group of people. \"High prevalence\" is a statistical observation, a classic correlation.",
    difficulty: 'Easy',
    deconstruction: {
      prompt: "What two things were observed together in the same group of patients?",
      cause: "Recovering from the novel virus.",
      effect: "An unusually high prevalence of a specific, rare antibody."
    }
  },
  {
    id: "M1-Q07",
    moduleId: 'correlation-causation',
    stem: "The architectural philosophy of \"form follows function\" implies that the aesthetic qualities of a building are a direct byproduct of its practical utility and structural requirements.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "The key phrase here is \"byproduct of.\" A byproduct is something produced in the course of making something else. This statement is claiming that practical utility (the cause) actively produces aesthetic qualities (the effect).",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "What is the cause and what is the effect, according to this philosophy?",
      cause: "A building's practical utility and structural requirements.",
      effect: "The aesthetic qualities of the building."
    }
  },
  {
    id: "M1-Q08",
    moduleId: 'correlation-causation',
    stem: "A comparative analysis of post-industrial cities reveals that those with a diversified economic base were substantially more resilient to the global financial crisis than those reliant on a single industry.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "This is a classic group comparison. It observes a characteristic (\"more resilient\") that is present in one group (diversified cities) more than in another (single-industry cities). It's a \"snapshot\" observation of a difference, not a claim about what caused that difference.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "What characteristic is being compared between two types of cities?",
      cause: "Having a diversified economic base (vs. a single-industry base).",
      effect: "Being substantially more resilient to the global financial crisis."
    }
  },
  {
    id: "M1-Q09",
    moduleId: 'correlation-causation',
    stem: "The chief economist's testimony asserted that the nation's stagnant wage growth, despite rising corporate profits, is symptomatic of a fundamental decoupling between productivity and compensation.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "This is a subtle trap. A symptom is a sign or an indicator of something, not something caused by it. For example, a fever is a symptom of an infection. The statement is just saying stagnant wages are an indicator of decoupling; it's not claiming the decoupling caused the stagnant wages. It's a sophisticated way of pointing out an association.",
    difficulty: 'Hard',
    deconstruction: {
      prompt: "What is presented as a symptom, and what is the underlying condition?",
      cause: "A fundamental decoupling between productivity and compensation.",
      effect: "The nation's stagnant wage growth."
    }
  },
  {
    id: "M1-Q10",
    moduleId: 'correlation-causation',
    stem: "The prosecutor's closing argument rested on the claim that the defendant's deliberate erasure of his computer's hard drive gave rise to an inference of consciousness of guilt.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "The phrase \"gave rise to\" is a direct causal idiom. It claims that one action (erasing the hard drive) actively produced or created the effect (the legal concept of an \"inference of guilt\").",
    difficulty: 'Easy',
    deconstruction: {
      prompt: "What action is claimed to have produced what result?",
      cause: "The defendant's deliberate erasure of his computer's hard drive.",
      effect: "An inference of consciousness of guilt."
    }
  },
  {
    id: "M1-Q11",
    moduleId: 'correlation-causation',
    stem: "It is axiomatic in ecology that the removal of a keystone species from an ecosystem precipitates a cascade of negative effects, profoundly diminishing its overall stability.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "\"Precipitates\" is a strong, active verb meaning \"to cause an event to happen suddenly or unexpectedly.\" The statement claims the removal of the species directly causes the cascade of effects.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "Identify the ecological cause and its resulting effect.",
      cause: "The removal of a keystone species from an ecosystem.",
      effect: "A cascade of negative effects that diminishes stability."
    }
  },
  {
    id: "M1-Q12",
    moduleId: 'correlation-causation',
    stem: "The prevailing theory among linguists is that the grammatical complexity of a language bears no systematic relationship to the technological advancement of the society that speaks it.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "This is a statement about the absence of a relationship. By stating there is \"no systematic relationship,\" it is fundamentally a correlational claim (or lack thereof). It is not making a claim about one thing causing another.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "What two societal features are said to have no link?",
      cause: "The grammatical complexity of a language.",
      effect: "The technological advancement of the society."
    }
  },
  {
    id: "M1-Q13",
    moduleId: 'correlation-causation',
    stem: "The diplomat's memoirs reveal that the treaty's eventual failure was rooted in a fundamental miscalculation of the opposing nation's long-term strategic interests.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "The phrase \"was rooted in\" points to the origin or source of the failure. This is a metaphorical way to assign a cause. The miscalculation is presented as the direct reason for the failure.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "What was the root cause of the treaty's failure?",
      cause: "A fundamental miscalculation of the opposing nation's interests.",
      effect: "The treaty's eventual failure."
    }
  },
  {
    id: "M1-Q14",
    moduleId: 'correlation-causation',
    stem: "Within the field of cryptography, the advent of quantum computing is widely seen as being conducive to the eventual obsolescence of current encryption standards.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "The key phrase is \"conducive to,\" which means \"making a certain situation or outcome likely or possible.\" This is a softer causal claim, but it's causal nonetheless. It states that quantum computing helps create or bring about obsolescence.",
    difficulty: 'Hard',
    deconstruction: {
      prompt: "What new technology is seen as leading to what outcome?",
      cause: "The advent of quantum computing.",
      effect: "The eventual obsolescence of current encryption standards."
    }
  },
  {
    id: "M1-Q15",
    moduleId: 'correlation-causation',
    stem: "A recurring pattern in an artist's body of work is the coincidence of periods of intense personal turmoil with bursts of profound creative innovation.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "\"Coincidence\" is the absolute classic word for a correlation. It literally means two things happening at the same time or in the same place without a causal connection being stated.",
    difficulty: 'Easy',
    deconstruction: {
      prompt: "What two periods in the artist's life are said to coincide?",
      cause: "Periods of intense personal turmoil.",
      effect: "Bursts of profound creative innovation."
    }
  },
  {
    id: "M1-Q16",
    moduleId: 'correlation-causation',
    stem: "The company's chronic inability to meet its production targets can be traced back to a top-down management culture that consistently stifles feedback from frontline employees.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "The phrase \"can be traced back to\" is a definitive statement of origin. It claims that if you follow the chain of events, you will find that the management culture is the source that actively \"stifles\" feedback, leading to the inability to meet targets.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "What is the source of the company's problem?",
      cause: "A top-down management culture that stifles feedback.",
      effect: "The company's chronic inability to meet production targets."
    }
  },
  {
    id: "M1-Q17",
    moduleId: 'correlation-causation',
    stem: "A review of the nation's judicial history finds that the Supreme Court's landmark decisions are frequently at odds with the prevailing public opinion of their time.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "\"At odds with\" simply describes a state of disagreement or contrast between two things (court decisions and public opinion). It's an observation about a relationship, not a claim that one caused the other.",
    difficulty: 'Easy',
    deconstruction: {
      prompt: "What two things are described as being frequently in disagreement?",
      cause: "The Supreme Court's landmark decisions.",
      effect: "The prevailing public opinion of their time."
    }
  },
  {
    id: "M1-Q18",
    moduleId: 'correlation-causation',
    stem: "The philosophical position of determinism advances the argument that an individual's choices are the inevitable result of antecedent biochemical and environmental factors.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "\"Inevitable result of\" is one of the strongest possible causal phrases. It leaves no room for doubt: it claims that prior factors completely and totally produce the individual's choices.",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "According to determinism, what is the cause and what is the effect?",
      cause: "Antecedent biochemical and environmental factors.",
      effect: "An individual's choices."
    }
  },
  {
    id: "M1-Q19",
    moduleId: 'correlation-causation',
    stem: "A troubling sign for the economy is that the recent surge in the stock market has occurred alongside a decline in the labor force participation rate.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 1,
    explanation: "\"Occurred alongside\" explicitly states that two events happened at the same time. This is the very definition of a correlation, a describing a parallel occurrence without claiming one caused the other.",
    difficulty: 'Easy',
    deconstruction: {
      prompt: "What two economic events are happening at the same time?",
      cause: "The recent surge in the stock market.",
      effect: "A decline in the labor force participation rate."
    }
  },
  {
    id: "M1-Q20",
    moduleId: 'correlation-causation',
    stem: "The efficiency of the new logistical software is manifested in the system's ability to reroute shipments in real-time, thereby minimizing delays caused by unforeseen events.",
    choices: [ { text: "Causation" }, { text: "Correlation" } ],
    correctIndex: 0,
    explanation: "The key causal phrase is \"thereby minimizing delays.\" This indicates that the software's ability to reroute (the cause) directly leads to the reduction of delays (the effect).",
    difficulty: 'Medium',
    deconstruction: {
      prompt: "What software ability leads to what positive outcome?",
      cause: "The system's ability to reroute shipments in real-time.",
      effect: "Minimizing delays caused by unforeseen events."
    }
  },
];

// Transformed Data from M2.questions.json
const module2Questions: Question[] = [
    {
        id: "M2-Q01",
        moduleId: 'common-causes',
        stem: "A sociologist argues that the recent trend of young adults delaying marriage is a direct consequence of their increasing pursuit of higher education.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A widespread economic anxiety could be the true cause. This anxiety could push young adults to pursue more education to secure a better career, while also causing them to delay marriage due to financial instability.\n\nModel Reverse Causation Answer: This is less intuitive, which makes it a good challenge. One could argue that an individual's decision to delay marriage (the \"effect\") is what gives them the freedom and time to pursue years of higher education (the \"cause\").",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "Identify the two elements of the sociologist's causal claim.",
          cause: "Young adults' increasing pursuit of higher education.",
          effect: "The recent trend of young adults delaying marriage."
        }
    },
    {
        id: "M2-Q02",
        moduleId: 'common-causes',
        stem: "A corporate analyst concluded that a company's heavy investment in research and development is the primary engine of its sustained market dominance.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: Visionary and stable leadership could be the third factor. Such leadership would have the foresight to invest heavily in R&D and make the other smart business decisions necessary for sustained market dominance.\n\nModel Reverse Causation Answer: This is very strong. A company's sustained market dominance (the \"effect\") generates enormous profits, which in turn provides the capital that allows the company to invest heavily in R&D (the \"cause\").",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What is the cause and what is the effect in the analyst's conclusion?",
          cause: "A company's heavy investment in research and development.",
          effect: "Its sustained market dominance."
        }
    },
    {
        id: "M2-Q03",
        moduleId: 'common-causes',
        stem: "A study on urban living found that individuals who live in neighborhoods with a high degree of walkability report greater levels of civic engagement.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: Higher income levels could be the third factor. Wealthier individuals can afford to live in desirable, walkable neighborhoods, and they may also have more time, resources, and social connections to be civically engaged.\n\nModel Reverse Causation Answer: People who are already highly civically engaged (the \"effect\") might actively seek out and choose to live in walkable neighborhoods that foster a sense of community and public life (the \"cause\"). This is a classic self-selection problem.",
        difficulty: 'Hard',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What neighborhood feature is linked to what resident behavior?",
          cause: "Living in neighborhoods with a high degree of walkability.",
          effect: "Reporting greater levels of civic engagement."
        }
    },
    {
        id: "M2-Q04",
        moduleId: 'common-causes',
        stem: "A political scientist claims that the rise of 24-hour cable news networks, with their emphasis on conflict, is responsible for the increased political polarization among the electorate.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: The fragmentation of the internet and social media could be a third factor that both gave rise to niche, conflict-driven cable news channels and independently allowed citizens to self-segregate into political \"bubbles,\" thus increasing polarization.\n\nModel Reverse Causation Answer: An already-increasing political polarization among the public (the \"effect\") could have created a market demand for news outlets that catered to specific viewpoints, leading to the rise of conflict-oriented 24-hour news networks (the \"cause\").",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What cause is said to be responsible for what political effect?",
          cause: "The rise of 24-hour cable news networks.",
          effect: "The increased political polarization among the electorate."
        }
    },
    {
        id: "M2-Q05",
        moduleId: 'common-causes',
        stem: "An education report concludes that the implementation of a standardized curriculum across all schools in the district has produced a measurable increase in students' average test scores.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A major influx of funding from a new state initiative could be the third factor. This funding could have paid for the new curriculum and separately paid for other resources like smaller class sizes, better teacher training, or new technology, which were the real cause of the higher scores.\n\nModel Reverse Causation Answer: In this \"before and after\" scenario, reverse causation is not plausible, as the implementation of the curriculum came first. This forces the test-taker to recognize which type of alternate explanation is most effective for a given situation.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What action is said to have produced what result?",
          cause: "The implementation of a standardized curriculum.",
          effect: "A measurable increase in students' average test scores."
        }
    },
    {
        id: "M2-Q06",
        moduleId: 'common-causes',
        stem: "A health study spanning two decades found that individuals who regularly drink moderate amounts of red wine have a significantly lower incidence of heart disease.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: Higher socioeconomic status is a classic third factor for this scenario. People who can afford to drink red wine regularly might also have better diets, better healthcare access, and lower-stress jobs, all of which contribute to a lower incidence of heart disease.\n\nModel Reverse Causation Answer: This is not very plausible, as having a healthy heart wouldn't cause someone to drink red wine. The strength of the Third Factor explanation is the key takeaway here.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What behavior is linked with what health outcome?",
          cause: "Regularly drinking moderate amounts of red wine.",
          effect: "A significantly lower incidence of heart disease."
        }
    },
    {
        id: "M2-Q07",
        moduleId: 'common-causes',
        stem: "A business consultant's report argues that the company's \"unlimited vacation\" policy has led to a more productive and efficient workforce.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A highly selective hiring process could be the third factor. The company might only hire extremely motivated, high-achieving individuals who would be productive and efficient regardless of the vacation policy. This same high-trust environment allows for a policy like unlimited vacation.\n\nModel Reverse Causation Answer: A pre-existing culture of high productivity and efficiency (the \"effect\") may have been what allowed management to trust employees enough to implement a radical \"unlimited vacation\" policy (the \"cause\").",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What policy is claimed to have led to what result?",
          cause: "The company's \"unlimited vacation\" policy.",
          effect: "A more productive and efficient workforce."
        }
    },
    {
        id: "M2-Q08",
        moduleId: 'common-causes',
        stem: "A geographer observed that communities with the highest rates of adherence to local recycling programs also have the most well-funded public schools.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: The overall wealth and tax base of the community is a likely third factor. Wealthier communities can afford well-funded schools and tend to have more resources and education to promote and adhere to recycling programs.\n\nModel Reverse Causation Answer: This is unlikely. It's hard to argue that well-funded schools cause people to recycle more.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What two community characteristics are observed together?",
          cause: "Highest rates of adherence to local recycling programs.",
          effect: "Having the most well-funded public schools."
        }
    },
    {
        id: "M2-Q09",
        moduleId: 'common-causes',
        stem: "A psychologist's research suggests that developing a high degree of expertise in a complex skill, like playing chess or a musical instrument, directly improves one's general problem-solving abilities.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: Innate cognitive ability or a high level of personal discipline could be the third factor. A person with these traits would be more likely to develop expertise in a complex skill and would naturally be a better general problem-solver.\n\nModel Reverse Causation Answer: Individuals who are already excellent general problem-solvers (the \"effect\") might be more drawn to and successful at learning complex skills like chess or music (the \"cause\").",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What skill development is said to improve what general ability?",
          cause: "Developing a high degree of expertise in a complex skill.",
          effect: "Improving one's general problem-solving abilities."
        }
    },
    {
        id: "M2-Q10",
        moduleId: 'common-causes',
        stem: "A tech industry analyst asserts that the adoption of \"open-plan\" office layouts is the reason for the decline in deep, focused work among employees.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: The increasing demands of a collaborative, always-on work culture (e.g., constant emails, Slack messages, meetings) could be the third factor. This culture could have led to the decline in deep work and independently promoted the adoption of open-plan offices to foster that same collaboration.\n\nModel Reverse Causation Answer: A decline in the need for deep, focused work within a company (the \"effect\") due to a shift in business strategy might have prompted the company to adopt open-plan layouts (the \"cause\") because they no longer needed to prioritize quiet, individual spaces.",
        difficulty: 'Hard',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What change in office design is blamed for what change in work habits?",
          cause: "The adoption of \"open-plan\" office layouts.",
          effect: "The decline in deep, focused work among employees."
        }
    },
    {
        id: "M2-Q11",
        moduleId: 'common-causes',
        stem: "A study found that surgeons who listen to classical music while operating have, on average, lower error rates than those who do not.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: Years of experience or a higher skill level could be the third factor. More experienced, confident surgeons might feel comfortable listening to music, and their experience is the real reason for their lower error rates.\n\nModel Reverse Causation Answer: Surgeons with naturally steady hands and low stress levels (the \"effect,\" leading to lower error rates) might be the type of people who are more inclined to listen to calming classical music during high-pressure situations (the \"cause\").",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What behavior is linked to what performance outcome for surgeons?",
          cause: "Listening to classical music while operating.",
          effect: "Having lower error rates."
        }
    },
    {
        id: "M2-Q12",
        moduleId: 'common-causes',
        stem: "A financial report noted that corporations that spend the most on lobbying the government tend to be the most profitable in their respective industries.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: Aggressive and skilled corporate leadership could be the third factor. Such leaders would pursue every advantage, including lobbying, and would also run the company in a way that generates maximum profits.\n\nModel Reverse Causation Answer: Being highly profitable (the \"effect\") is what provides the massive amounts of cash necessary to spend the most on lobbying (the \"cause\").",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What corporate action is correlated with what financial result?",
          cause: "Spending the most on lobbying the government.",
          effect: "Being the most profitable in their industries."
        }
    },
    {
        id: "M2-Q13",
        moduleId: 'common-causes',
        stem: "A parenting expert claims that children who are assigned regular household chores develop a stronger sense of personal responsibility.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A particular style of parenting could be the third factor. Parents who are focused on teaching responsibility are likely to assign chores and to instill that value in their children through many other methods as well.\n\nModel Reverse Causation Answer: Children who have a naturally higher sense of personal responsibility (the \"effect\") may be more willing to ask for, and reliably complete, household chores (the \"cause\").",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What parenting practice is claimed to produce what character trait?",
          cause: "Assigning children regular household chores.",
          effect: "Developing a stronger sense of personal responsibility."
        }
    },
    {
        id: "M2-Q14",
        moduleId: 'common-causes',
        stem: "An environmental study concluded that the government's subsidy program for electric vehicles is what caused the recent improvement in the capital city's air quality.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A separate city-wide tax incentive program for new businesses could be the third factor that prompted the revitalization, which may have occurred at the same time as the light-rail construction.\n\nModel Reverse Causation Answer: Not plausible in this \"before and after\" scenario.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What government program is credited with what environmental outcome?",
          cause: "The government's subsidy program for electric vehicles.",
          effect: "The recent improvement in the capital city's air quality."
        }
    },
    {
        id: "M2-Q15",
        moduleId: 'common-causes',
        stem: "A literary historian argues that the invention of the printing press was the principal cause of the rise of individualism during the Renaissance.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A broader cultural and philosophical shift towards humanism could be the third factor. This shift could have fueled the desire for knowledge that led to the invention of the printing press and independently championed the ideals of individualism.\n\nModel Reverse Causation Answer: The beginnings of a rise in individualism (the \"effect\") and a demand for personal knowledge and religious texts could have created the economic and social incentive to invent the printing press (the \"cause\").",
        difficulty: 'Hard',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What invention is claimed to be the cause of what cultural shift?",
          cause: "The invention of the printing press.",
          effect: "The rise of individualism during the Renaissance."
        }
    },
    {
        id: "M2-Q16",
        moduleId: 'common-causes',
        stem: "A survey of entrepreneurs revealed that those who describe themselves as \"early risers\" are more likely to lead commercially successful ventures.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A high level of self-discipline and motivation is a likely third factor. This personality trait would cause someone to be an early riser and would be a key ingredient in leading a successful business.\n\nModel Reverse Causation Answer: The immense pressure and demands of running a successful venture (the \"effect\") may force an entrepreneur to become an early riser (the \"cause\") simply to get all their work done.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What personal habit is linked to what business outcome?",
          cause: "Being an \"early riser\".",
          effect: "Leading commercially successful ventures."
        }
    },
    {
        id: "M2-Q17",
        moduleId: 'common-causes',
        stem: "A city planning report claims that the construction of a new light-rail system has prompted a wave of economic revitalization in the downtown core.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A separate city-wide tax incentive program for new businesses could be the third factor that prompted the revitalization, which may have occurred at the same time as the light-rail construction.\n\nModel Reverse Causation Answer: The initial signs of an economic revitalization already underway (the \"effect\"), perhaps due to private investment, may have been what convinced the city government to approve and build the new light-rail system (the \"cause\") to support the growth.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What infrastructure project is said to have prompted what economic change?",
          cause: "The construction of a new light-rail system.",
          effect: "A wave of economic revitalization in the downtown core."
        }
    },
    {
        id: "M2-Q18",
        moduleId: 'common-causes',
        stem: "An organizational psychologist concluded that a manager's level of emotional intelligence is the key determinant of their team's overall job satisfaction.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: The company's overall culture and benefits package could be the third factor. A great company culture might attract emotionally intelligent managers and independently lead to high job satisfaction among all employees.\n\nModel Reverse Causation Answer: Managing a team that is already happy, motivated, and satisfied (the \"effect\") would be far less stressful and would make it much easier for a manager to appear patient, understanding, and emotionally intelligent (the \"cause\").",
        difficulty: 'Hard',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What manager trait is claimed to determine what team outcome?",
          cause: "A manager's level of emotional intelligence.",
          effect: "Their team's overall job satisfaction."
        }
    },
    {
        id: "M2-Q19",
        moduleId: 'common-causes',
        stem: "A military historian's analysis asserts that the defeated army's loss was the inevitable result of its over-reliance on outdated battlefield technology.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A rigid, conservative military leadership could be the third factor. Such leadership would be resistant to new technology and would likely make other poor strategic decisions that led to the army's defeat.\n\nModel Reverse Causation Answer: A series of early battlefield losses (the \"effect\") due to poor strategy may have destroyed the army's best equipment, forcing them to rely on their remaining outdated technology (the \"cause\").",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What is claimed to be the cause of the army's defeat?",
          cause: "Over-reliance on outdated battlefield technology.",
          effect: "The defeated army's loss."
        }
    },
    {
        id: "M2-Q20",
        moduleId: 'common-causes',
        stem: "A global health organization claims that the widespread distribution of free mosquito nets in a region has led to a dramatic reduction in malaria infection rates.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Third Factor Answer: A simultaneous effort to drain nearby swampland where mosquitoes breed, or a separate public health education campaign, could be the true cause of the reduction in malaria rates.\n\nModel Reverse Causation Answer: Not plausible.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What action is said to have led to what health outcome?",
          cause: "Widespread distribution of free mosquito nets.",
          effect: "A dramatic reduction in malaria infection rates."
        }
    },
];

// Transformed Data from M3.questions.json
const module3Questions: Question[] = [
    {
        id: "M3-Q01",
        moduleId: 'reverse-causality',
        stem: "A pharmaceutical company's advertisement claims that its new prescription drug is what eliminates the debilitating symptoms of chronic migraines.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A large clinical trial shows that 40% of patients who take the drug as prescribed report no improvement in their migraine symptoms whatsoever.\n\nModel Effect without Cause Answer: In the same clinical trial, a significant number of patients in the control group who received a sugar pill (placebo) reported a complete elimination of their migraine symptoms.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "Identify the cause and effect in the company's claim.",
          cause: "Taking the new prescription drug.",
          effect: "Eliminating the debilitating symptoms of chronic migraines."
        }
    },
    {
        id: "M3-Q02",
        moduleId: 'reverse-causality',
        stem: "A policy advisor argues that the government's decision to offer generous tax credits for small businesses is the sole reason for the recent surge in entrepreneurship.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A neighboring country implemented even more generous tax credits for small businesses, but saw a decline in new business formation during the same period.\n\nModel Effect without Cause Answer: Another country that offered no new tax credits saw an even larger surge in entrepreneurship, which was attributed to a cultural shift following a popular reality TV show about startups.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What government action is claimed to be the reason for what economic trend?",
          cause: "The government's decision to offer generous tax credits.",
          effect: "The recent surge in entrepreneurship."
        }
    },
    {
        id: "M3-Q03",
        moduleId: 'reverse-causality',
        stem: "The university's dean asserts that its mandatory \"study abroad\" program is what instills a sense of global citizenship in its students.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A survey of recent graduates reveals that students who completed the study abroad program show the same levels of ethnocentrism and cultural awareness as students from a nearby university with no such program.\n\nModel Effect without Cause Answer: A student who could not afford to travel abroad spent a year working with a local refugee resettlement agency and demonstrated a far more profound sense of global citizenship than any of their peers who did travel.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What program is said to instill what quality in students?",
          cause: "The mandatory \"study abroad\" program.",
          effect: "Instilling a sense of global citizenship."
        }
    },
    {
        id: "M3-Q04",
        moduleId: 'reverse-causality',
        stem: "A cybersecurity firm's report states that a single, sophisticated phishing email was the initiating event that resulted in the catastrophic, months-long data breach.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: The same phishing email was sent to a dozen other corporations with identical security systems, but in every other case, it was caught and neutralized by standard antivirus software before it could do any damage.\n\nModel Effect without Cause Answer: A forensic audit reveals that the company's servers were already compromised by a different, unrelated piece of malware for six months before the phishing email was ever sent.",
        difficulty: 'Hard',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What single event is claimed to have resulted in what disaster?",
          cause: "A single, sophisticated phishing email.",
          effect: "The catastrophic, months-long data breach."
        }
    },
    {
        id: "M3-Q05",
        moduleId: 'reverse-causality',
        stem: "A management consultant claims that the implementation of a \"Forced Ranking\" employee evaluation system is what drives a culture of high performance and accountability.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A well-known tech company implemented a forced ranking system, which led to a collapse in employee morale, a refusal to collaborate, and a mass exodus of their top talent, ultimately crippling performance.\n\nModel Effect without Cause Answer: A competing company achieved a world-renowned culture of high performance and accountability by using a system based entirely on collaborative projects and peer feedback, with no individual performance rankings at all.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What system is claimed to drive what kind of culture?",
          cause: "The implementation of a \"Forced Ranking\" system.",
          effect: "A culture of high performance and accountability."
        }
    },
    {
        id: "M3-Q06",
        moduleId: 'reverse-causality',
        stem: "The director of a national park argues that the reintroduction of the wolf population is what restored the ecological balance of the entire region.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: Another national park reintroduced wolves, but the elk population did not change, the riverbanks continued to erode, and the overall ecological balance remained degraded, possibly due to a concurrent drought.\n\nModel Effect without Cause Answer: A similar national park that did not reintroduce wolves saw an identical restoration of its ecological balance after a program to manually remove invasive plant species proved highly successful.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What action is said to have restored what state?",
          cause: "The reintroduction of the wolf population.",
          effect: "Restoring the ecological balance of the entire region."
        }
    },
    {
        id: "M3-Q07",
        moduleId: 'reverse-causality',
        stem: "A software engineer claims that refactoring the application's legacy codebase to modern standards is the change that produced its dramatic improvement in speed and stability.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A different team at the same company spent a year refactoring another legacy application, and when they were finished, the new code was even slower and more prone to crashing than the original.\n\nModel Effect without Cause Answer: The dramatic improvement in the application's speed and stability actually occurred a week before the refactored code was deployed, coinciding with a major hardware upgrade on the company's servers.",
        difficulty: 'Hard',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What engineering effort is claimed to have produced what performance improvement?",
          cause: "Refactoring the application's legacy codebase.",
          effect: "Dramatic improvement in speed and stability."
        }
    },
    {
        id: "M3-Q08",
        moduleId: 'reverse-causality',
        stem: "A campaign strategist is certain that their \"get-out-the-vote\" phone banking operation in the final 48 hours was the key factor that delivered the razor-thin election victory.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: In a previous, similar election, the same campaign ran an even larger phone banking operation, but they ended up losing by a wide margin.\n\nModel Effect without Cause Answer: In a neighboring district with identical demographics, a candidate with no phone banking operation won by the exact same razor-thin margin, suggesting a broader regional political trend was the deciding factor.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What campaign activity is credited as the key factor for what outcome?",
          cause: "The \"get-out-the-vote\" phone banking operation.",
          effect: "Delivering the razor-thin election victory."
        }
    },
    {
        id: "M3-Q09",
        moduleId: 'reverse-causality',
        stem: "A central bank governor states that raising interest rates was a necessary action that successfully curbed runaway inflation.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: Central banks in several other countries raised their interest rates even more aggressively, yet inflation continued to accelerate for another two years.\n\nModel Effect without Cause Answer: A country that did not raise its interest rates saw its inflation rate fall even more quickly, as the resolution of global supply chain issues was the true cause of the price stabilization.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What action is said to have curbed what economic problem?",
          cause: "Raising interest rates.",
          effect: "Successfully curbing runaway inflation."
        }
    },
    {
        id: "M3-Q10",
        moduleId: 'reverse-causality',
        stem: "A cognitive scientist posits that the practice of mindfulness meditation is a technique that directly enhances an individual's capacity for sustained attention.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A study followed a group of people who meditated for 30 minutes every day for a year, but found no improvement in their performance on standardized tests of attention and focus compared to a control group.\n\nModel Effect without Cause Answer: Another study found that participants who simply took a 30-minute walk in nature each day showed the same, or even greater, enhancement in their capacity for sustained attention as the meditation group.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What practice is claimed to enhance what cognitive capacity?",
          cause: "The practice of mindfulness meditation.",
          effect: "Enhancing an individual's capacity for sustained attention."
        }
    },
    {
        id: "M3-Q11",
        moduleId: 'reverse-causality',
        stem: "A city mayor claims that his \"broken windows\" policing policy, which targets minor infractions, is directly responsible for the city-wide drop in major violent crimes.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: The city of a neighboring state implemented an identical \"broken windows\" policy, but its violent crime rate actually increased during the same period.\n\nModel Effect without Cause Answer: Another major city that explicitly repealed its \"broken windows\" policy and focused on community outreach instead saw an even larger drop in its violent crime rate.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What policing policy is claimed to be responsible for what outcome?",
          cause: "The \"broken windows\" policing policy.",
          effect: "The city-wide drop in major violent crimes."
        }
    },
    {
        id: "M3-Q12",
        moduleId: 'reverse-causality',
        stem: "A company's marketing department insists that its multi-million dollar Super Bowl advertisement was the catalyst for the subsequent quarter's record-breaking sales.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: The company had run a similarly expensive and acclaimed Super Bowl ad five years prior, which was followed by a quarter of dismal, flat sales.\n\nModel Effect without Cause Answer: The company's main competitor, which did not run a Super Bowl ad, saw the exact same percentage increase in sales during the same quarter, as the entire market for their product expanded due to external factors.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What marketing event was said to be the catalyst for what result?",
          cause: "The multi-million dollar Super Bowl advertisement.",
          effect: "The subsequent quarter's record-breaking sales."
        }
    },
    {
        id: "M3-Q13",
        moduleId: 'reverse-causality',
        stem: "A venture capitalist believes that her early-stage investment and mentorship are what enabled a struggling startup to become a billion-dollar company.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: The same venture capitalist has invested in and mentored 50 other struggling startups using the exact same methods, and every single one of them has gone bankrupt.\n\nModel Effect without Cause Answer: A nearly identical startup in the same city, which was rejected by the venture capitalist and received no external funding or mentorship, also went on to become a billion-dollar company.",
        difficulty: 'Hard',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What actions are credited with enabling what outcome?",
          cause: "Her early-stage investment and mentorship.",
          effect: "A struggling startup becoming a billion-dollar company."
        }
    },
    {
        id: "M3-Q14",
        moduleId: 'reverse-causality',
        stem: "An educational psychologist argues that a classroom's physical design, specifically its use of natural light and flexible seating, is a primary driver of student creativity.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A newly built school was designed with maximum natural light and flexible seating, but after five years, its students showed significantly lower scores on standardized creativity tests than students in the old, traditional building.\n\nModel Effect without Cause Answer: A school in a dark, basement-level building with rigid, traditional desks consistently produces the most creative and award-winning students in the state, largely due to its exceptional teaching staff.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What classroom design features are said to drive what student trait?",
          cause: "A classroom's physical design (natural light, flexible seating).",
          effect: "Student creativity."
        }
    },
    {
        id: "M3-Q15",
        moduleId: 'reverse-causality',
        stem: "A historian asserts that the signing of the peace accord was the event that prevented the two nations from descending into an all-out war.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: Two other nations signed an identical peace accord, but one of them violated the terms a week later, leading to the most destructive war in their history.\n\nModel Effect without Cause Answer: Two other nations were on the brink of war, but they never signed a peace accord. Instead, a sudden economic collapse in both countries made war unaffordable, and they peacefully disengaged their armies.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What event is said to have prevented what outcome?",
          cause: "The signing of the peace accord.",
          effect: "Preventing the two nations from descending into war."
        }
    },
    {
        id: "M3-Q16",
        moduleId: 'reverse-causality',
        stem: "The head of HR claims that the company's new, highly competitive bonus structure is what motivates the sales team to exceed its targets each month.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: The company rolled out the same bonus structure in another regional office, where it fostered so much toxic competition that teamwork collapsed and the sales team missed its targets for the first time in a decade.\n\nModel Effect without Cause Answer: The company's engineering department, which has no bonus structure and where all employees are paid a flat salary, also exceeds its performance targets every single month.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What new structure is claimed to motivate what result?",
          cause: "The company's new, highly competitive bonus structure.",
          effect: "Motivating the sales team to exceed its targets."
        }
    },
    {
        id: "M3-Q17",
        moduleId: 'reverse-causality',
        stem: "A civil engineer is confident that the installation of a new seismic retrofitting system is what will allow the old bridge to withstand a major earthquake.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A similar bridge that had been retrofitted with the exact same system collapsed during a moderate earthquake just last year.\n\nModel Effect without Cause Answer: An identical, non-retrofitted bridge in a neighboring county survived a major earthquake with no structural damage, suggesting the original design was far more robust than initially thought.",
        difficulty: 'Hard',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What installation is claimed to produce what capability?",
          cause: "Installation of a new seismic retrofitting system.",
          effect: "Allowing the old bridge to withstand a major earthquake."
        }
    },
    {
        id: "M3-Q18",
        moduleId: 'reverse-causality',
        stem: "An art critic argues that the artist's adoption of a radical new painting technique is what led to her sudden rise to international prominence.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: Many other talented artists have adopted the same radical technique, yet all of them continue to labor in obscurity.\n\nModel Effect without Cause Answer: Another artist rose to international prominence during the same period despite continuing to paint in a very traditional and conventional style, suggesting the shift in the art world's taste was about theme, not technique.",
        difficulty: 'Easy',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What change in technique is said to have led to what career change?",
          cause: "The artist's adoption of a radical new painting technique.",
          effect: "Her sudden rise to international prominence."
        }
    },
    {
        id: "M3-Q19",
        moduleId: 'reverse-causality',
        stem: "A nutritionist claims that a ketogenic diet is the optimal nutritional strategy for achieving rapid and sustainable weight loss.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: A large-scale study finds that the majority of people who adhere to a ketogenic diet for six months lose weight rapidly at first but regain all of it, and often more, by the end of the year.\n\nModel Effect without Cause Answer: A control group in the same study that followed a traditional, balanced, calorie-restricted diet achieved the same, or even better, rapid and sustainable weight loss results.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What diet is claimed to be the optimal strategy for what goal?",
          cause: "A ketogenic diet.",
          effect: "Achieving rapid and sustainable weight loss."
        }
    },
    {
        id: "M3-Q20",
        moduleId: 'reverse-causality',
        stem: "A city's tourism board attributes the recent boom in visitors to its new, aggressive \"City of Festivals\" marketing campaign.",
        choices: [ { text: "View Model Answer" } ],
        correctIndex: 0,
        explanation: "Model Cause without Effect Answer: The city ran a similar, equally aggressive marketing campaign five years earlier, which was followed by a year of stagnant, disappointing tourism numbers.\n\nModel Effect without Cause Answer: A neighboring city, which has no tourism board and ran no marketing campaigns, experienced an even larger boom in visitors during the same period due to a favorable exchange rate that made the entire region cheaper for international tourists.",
        difficulty: 'Medium',
        sourcePT: 'Authored Item',
        deconstruction: {
          prompt: "What campaign is given credit for what tourism outcome?",
          cause: "Its new, aggressive \"City of Festivals\" marketing campaign.",
          effect: "The recent boom in visitors."
        }
    },
];

const module4Questions: Question[] = [
    {
        id: 'M4-Q01',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 122 | Sec 2 | Q 6',
        difficulty: 'Easy',
        stimulus: "The cattle egret is a bird that lives around herds of cattle. The only available explanation of the fact that the cattle egret follows cattle herds is that the egrets consume the insects stirred up from the grasses as the cattle herds graze.",
        question: "Which one of the following, if true, would most seriously undermine the claim that the explanation given above is the only available one?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, would most seriously undermine the claim that the explanation given above is the only available one?",
        choices: [
            { text: "Birds other than cattle egrets have been observed consuming insects stirred up by the movement of cattle." },
            { text: "Cattle egrets are known to follow other slow-moving animals, such as rhinoceroses and buffalo." },
            { text: "The presence of cattle dissuades many would-be predators of the cattle egret." },
            { text: "Cattle egrets are not generally known to live outside the range of large, slow-moving animals." },
            { text: "Forests are generally inhospitable to cattle egrets because of a lack of insects of the kind egrets can consume." }
        ],
        correctIndex: 2,
        explanation: "This provides an alternate explanation: the presence of cattle dissuades egret predators. This gives a new reason for following herds, beyond just the insect-stirring explanation.",
        breakdown: {
            mainConclusion: "The only reason cattle egrets follow cattle is to eat the insects the cattle stir up.",
            premises: ["Cattle egrets live around and follow cattle herds."],
            choiceBreakdowns: {
                0: { explanation: "This is irrelevant. What other birds do doesn't affect the reason why cattle egrets follow cattle." },
                1: { explanation: "This strengthens the argument by showing that egrets follow other large animals that also stir up insects, reinforcing the food-based explanation." },
                2: {
                    explanation: "This is the correct answer. The argument claims there's only one explanation (food). This provides a completely different, plausible explanation (protection from predators). If there's another good reason for the egrets to follow the cattle, then the original claim that the food is the *only* reason is weakened. This is a classic alternate cause weakener from Module 2.",
                    analogy: "It's like saying the only reason people go to a coffee shop is for the coffee, and then discovering the shop also has incredibly fast, free Wi-Fi."
                },
                3: { explanation: "This strengthens the argument by showing that egrets depend on large animals, making the proposed relationship seem more necessary." },
                4: { explanation: "This strengthens the argument by ruling out other habitats, suggesting the egrets are specifically adapted to the environment that cattle provide." }
            }
        }
    },
    {
        id: 'M4-Q02',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 124 | Sec 1 | Q 3',
        difficulty: 'Easy',
        stimulus: "Science columnist: It is clear why humans have so many diseases in common with cats. Many human diseases are genetically based, and cats are genetically closer to humans than are any other mammals except nonhuman primates. Each of the genes identified so far in cats has an exact counterpart in humans.",
        question: "Which one of the following, if true, most weakens the science columnist's explanation for the claim that humans have so many diseases in common with cats?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most weakens the science columnist's explanation for the claim that humans have so many diseases in common with cats?",
        choices: [
            { text: "Cats have built up resistance to many of the diseases they have in common with humans." },
            { text: "Most diseases that humans have in common with cats have no genetic basis." },
            { text: "Cats have more diseases in common with nonhuman primates than with humans." },
            { text: "Many of the diseases humans have in common with cats are mild and are rarely diagnosed." },
            { text: "Humans have more genes in common with nonhuman primates than with cats." }
        ],
        correctIndex: 1,
        explanation: "This makes it much less likely that the reason that humans and cats have so many diseases in common is genetically based.",
        breakdown: {
            mainConclusion: "Genetic closeness is the reason humans and cats share many diseases.",
            premises: ["Many human diseases are genetic.", "Cats are genetically very close to humans."],
            choiceBreakdowns: {
                0: { explanation: "Resistance is irrelevant. Having resistance to a disease doesn't change whether you share the genetic basis for that disease in the first place." },
                1: {
                    explanation: "This is the correct answer. The entire argument hinges on the idea that the shared diseases are genetic. If most of the shared diseases are *not* genetic, then the genetic closeness between humans and cats cannot be the explanation for them. This directly attacks the central premise of the argument.",
                    analogy: "It's like arguing that two people look alike because they have the same parents, and then finding out that most of their similar features are from plastic surgery, not genetics."
                },
                2: { explanation: "This comparison to nonhuman primates is irrelevant. The argument is about the link between cats and humans, not about which animal is closest." },
                3: { explanation: "The severity of the diseases is irrelevant. The argument is about why the diseases are shared, not how serious they are." },
                4: { explanation: "This is already acknowledged in the stimulus ('except nonhuman primates'). Repeating this fact doesn't weaken the argument about the specific link to cats." }
            }
        }
    },
    {
        id: 'M4-Q03',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 126 | Sec 3 | Q 9',
        difficulty: 'Medium',
        stimulus: "Among people who have a history of chronic trouble falling asleep, some rely only on sleeping pills to help them fall asleep, and others practice behavior modification techniques and do not take sleeping pills. Those who rely only on behavior modification fall asleep more quickly than do those who rely only on sleeping pills, so behavior modification is more effective than are sleeping pills in helping people to fall asleep.",
        question: "Which one of the following, if true, most weakens the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most weakens the argument?",
        choices: [
            { text: "People who do not take sleeping pills spend at least as many total hours asleep each night as do the people who take sleeping pills." },
            { text: "Most people who have trouble falling asleep and who use behavior modification techniques fall asleep more slowly than do most people who have no trouble falling asleep." },
            { text: "Many people who use only behavior modification techniques to help them fall asleep have never used sleeping pills." },
            { text: "The people who are the most likely to take sleeping pills rather than practice behavior modification techniques are those who have previously had the most trouble falling asleep." },
            { text: "The people who are the most likely to practice behavior modification techniques rather than take sleeping pills are those who prefer not to use drugs if other treatments are available." }
        ],
        correctIndex: 3,
        explanation: "This undermines the argument by suggesting those who tried modifying their behavior generally had less difficulty falling asleep. This makes it possible for sleeping pills to be more effective at helping people fall asleep, but that the people who take such pills already begin with a much more difficult time falling asleep.",
        breakdown: {
            mainConclusion: "Behavior modification is more effective than sleeping pills for helping people with insomnia fall asleep.",
            premises: ["In a comparison, people using behavior modification fell asleep more quickly than people using sleeping pills."],
            choiceBreakdowns: {
                0: { explanation: "The total hours of sleep is irrelevant. The argument is specifically about the speed of falling asleep, not the duration." },
                1: { explanation: "Comparing insomniacs to people without trouble sleeping is irrelevant. The argument is about which treatment is more effective for people who already have trouble." },
                2: { explanation: "This information about past use is irrelevant. The study is about the current effectiveness of the two different methods." },
                3: {
                    explanation: "This is the correct answer. It shows that the two groups were not comparable to begin with. The people taking pills had a much more severe problem (the most trouble falling asleep). It's possible the pills are very effective, but their effect is masked because they are starting from a much worse position. This is an alternate cause for the observed difference, suggesting the severity of the insomnia, not the ineffectiveness of the pills, is the reason that group took longer to fall asleep. This is a key concept from Module 2.",
                    analogy: "It's like comparing a world-class surgeon and a rookie. The surgeon takes longer to finish an operation, but that's because she was assigned a case that was ten times more difficult. It doesn't mean the rookie is a better surgeon."
                },
                4: { explanation: "The reason why people chose a method is irrelevant to its effectiveness. A preference for non-drug treatments doesn't change how well those treatments work." }
            }
        }
    },
    {
        id: 'M4-Q04',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 127 | Sec 2 | Q 3',
        difficulty: 'Medium',
        stimulus: "Acme Corporation offers unskilled workers excellent opportunities for advancement. As evidence, consider the fact that the president of the company, Ms. Garon, worked as an assembly line worker, an entry-level position requiring no special skills, when she first started at Acme.",
        question: "Which one of the following statements, if true, most weakens the reasoning above?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following statements, if true, most weakens the reasoning above?",
        choices: [
            { text: "Acme's vice president of operations also worked as an assembly line worker when he first started at Acme." },
            { text: "Acme regularly hires top graduates of business schools and employs them briefly in each of a succession of entry-level positions before promoting them to management." },
            { text: "Acme promotes its own employees to senior management positions much more frequently than it hires senior managers from other companies." },
            { text: "Ms. Garon worked at Acme for more than 20 years before she was promoted to president." },
            { text: "Acme pays entry-level employees slightly higher wages than most other businesses in the same industry." }
        ],
        correctIndex: 1,
        explanation: "This weakens the argument by providing an alternative explanation than that which is offered in the argument for why Ms. Garon, who is now the president of the company, once worked as an assembly line worker.",
        breakdown: {
            mainConclusion: "Acme offers excellent advancement opportunities for unskilled workers.",
            premises: ["The current president, Ms. Garon, started as an unskilled assembly line worker."],
            choiceBreakdowns: {
                0: { explanation: "This strengthens the argument by providing a second example that fits the conclusion." },
                1: {
                    explanation: "This is the correct answer. It provides a powerful alternate explanation for the evidence. The argument assumes Ms. Garon was a typical unskilled worker who rose through the ranks. This answer suggests she may have been a top business school graduate on a special management track, and the assembly line job was just a temporary, required stop. If so, her story is not evidence of opportunities for genuinely unskilled workers, but for an elite few.",
                    analogy: "It's like pointing to a prince who spent one day working in the royal stables as 'evidence' that stable boys can become king."
                },
                2: { explanation: "This strengthens the argument by showing that Acme has a general policy of promoting from within." },
                3: { explanation: "The length of time it took for her to become president is irrelevant. The fact that she did it at all is the evidence being used." },
                4: { explanation: "Wages are irrelevant to the argument, which is about opportunities for advancement, not starting pay." }
            }
        }
    },
    {
        id: 'M4-Q05',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 129 | Sec 2 | Q 14',
        difficulty: 'Medium',
        stimulus: "Scientists have shown that older bees, which usually forage outside the hive for food, tend to have larger brains than do younger bees, which usually do not forage but instead remain in the hive to tend to newly hatched bees. Since foraging requires greater cognitive ability than does tending to newly hatched bees, it appears that foraging leads to the increased brain size of older bees.",
        question: "Which one of the following, if true, most seriously weakens the argument above?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most seriously weakens the argument above?",
        choices: [
            { text: "Bees that have foraged for a long time do not have significantly larger brains than do bees that have foraged for a shorter time." },
            { text: "The brains of older bees that stop foraging to take on other responsibilities do not become smaller after they stop foraging." },
            { text: "Those bees that travel a long distance to find food do not have significantly larger brains than do bees that locate food nearer the hive." },
            { text: "In some species of bees, the brains of older bees are only marginally larger than those of younger bees." },
            { text: "The brains of older bees that never learn to forage are the same size as those of their foraging counterparts of the same age." }
        ],
        correctIndex: 4,
        explanation: "This provides bees with increased brain size that do not forage.",
        breakdown: {
            mainConclusion: "The act of foraging causes the brains of bees to increase in size.",
            premises: ["Older, foraging bees have larger brains than younger, non-foraging bees.", "Foraging is a more cognitively demanding task."],
            choiceBreakdowns: {
                0: { explanation: "This doesn't effectively weaken the claim. It's possible that brain growth happens early in the foraging period and then plateaus. A lack of continued growth doesn't mean foraging didn't cause the initial growth." },
                1: { explanation: "This is irrelevant. The argument is about what causes brain growth, not what causes brain shrinkage. The effect might be permanent." },
                2: { explanation: "This is irrelevant. The argument is about foraging versus not foraging, not about the difficulty of the foraging." },
                3: { explanation: "The margin of the size difference is irrelevant. As long as there is a consistent difference, the causal argument can still be made." },
                4: {
                    explanation: "This is the correct answer. It shows the effect without the cause (a key weakening strategy from Module 3). The argument claims foraging (cause) leads to a big brain (effect). This choice presents a group of older bees with big brains (effect) that never foraged (no cause). This suggests that brain size increases with age regardless of activity, and the original correlation was just a coincidence of age and typical bee roles.",
                    analogy: "It's like noticing that teenagers who have drivers licenses are taller than middle schoolers, and concluding that driving a car makes you taller. Then you find a group of teenagers who don't drive and see they are just as tall. This proves age, not driving, is the real factor."
                }
            }
        }
    },
    {
        id: 'M4-Q06',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 113 | Sec 2 | Q 14',
        difficulty: 'Medium',
        stimulus: "In response to office workers' worries about the health risks associated with using video display terminals (VDTs), researchers asked office workers to estimate both the amount of time they had spent using VDTs and how often they had suffered headaches over the previous year. According to the survey, frequent VDT users suffered from headaches more often than other office workers did, leading researchers to conclude that VDTs cause headaches.",
        question: "Which one of the following, if true, most undermines the researchers' conclusion?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most undermines the researchers' conclusion?",
        choices: [
            { text: "Few of the office workers surveyed participated in regular health programs during the year in question." },
            { text: "In their study the researchers failed to ask the workers to distinguish between severe migraine headaches and mild headaches." },
            { text: "Previous studies have shown that the glare from VDT screens causes some users to suffer eyestrain." },
            { text: "Office workers who experienced frequent headaches were more likely than other workers to overestimate how much time they spent using VDTs." },
            { text: "Office workers who regularly used VDTs experienced the same amount of job-related stress as workers who did not use VDTs." }
        ],
        correctIndex: 3,
        explanation: "This suggests that those who experience frequent headaches overestimate their VDT usage, pointing to a third factor—misreporting—as a reason for the correlation. This challenges the causal link by suggesting that headaches are independent of actual VDT use.",
        breakdown: {
            mainConclusion: "Using VDTs causes headaches.",
            premises: ["A survey found a correlation between frequent VDT use and frequent headaches."],
            choiceBreakdowns: {
                0: { explanation: "Health program participation is irrelevant to the specific link between VDTs and headaches." },
                1: { explanation: "The severity of the headaches is irrelevant. The argument is about the frequency of headaches in general." },
                2: { explanation: "This strengthens the argument by providing a plausible mechanism for how VDTs could cause headaches (via eyestrain)." },
                3: {
                    explanation: "This is the correct answer. It suggests a form of reverse causality (Module 2). The argument claims VDT use (cause) leads to headaches (effect). This choice suggests that having headaches (effect) causes people to misremember and overestimate their VDT use (the 'cause'). The correlation is real, but it's based on flawed, self-reported data that gets the cause and effect relationship wrong. The VDTs are not the cause of the headaches; the headaches are the cause of the over-reported VDT use.",
                    analogy: "It's like asking people who are tired how much they've worked. Tired people might feel like they've worked more than they have, creating a false link between reported work hours and tiredness."
                },
                4: { explanation: "This strengthens the argument by ruling out stress as a potential alternate cause for the headaches." }
            }
        }
    },
    {
        id: 'M4-Q07',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 120 | Sec 4 | Q 5',
        difficulty: 'Easy',
        stimulus: "Sickles found at one archaeological site had scratched blades, but those found at a second site did not. Since sickle blades always become scratched whenever they are used to harvest grain, this evidence shows that the sickles found at the first site were used to harvest grain, but the sickles found at the second site were not.",
        question: "Which one of the following, if shown to be a realistic possibility, would undermine the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if shown to be a realistic possibility, would undermine the argument?",
        choices: [
            { text: "Some sickles that have not yet been found at the first site do not have scratched blades." },
            { text: "The scratches on the blades of the sickles found at the first site resulted from something other than harvesting grain." },
            { text: "Sickles at both sites had ritual uses whether or not those sickles were used to harvest grain." },
            { text: "At the second site tools other than sickles were used to harvest grain." },
            { text: "The sickles found at the first site were made by the same people who made the sickles found at the second site." }
        ],
        correctIndex: 1,
        explanation: "This does what most correct Weaken answers do, on Explain Curious Fact — it provides an alternate explanation for the curious fact. The answer doesn't tell us what alternate cause led to the scratches, but it assures us that there WAS an alternate cause. It wasn't scratched by harvesting grain.",
        breakdown: {
            mainConclusion: "The scratched sickles at site one were used for grain, and the unscratched sickles at site two were not.",
            premises: ["Grain harvesting always causes scratches.", "Site one sickles are scratched.", "Site two sickles are not scratched."],
            choiceBreakdowns: {
                0: { explanation: "What hasn't been found yet is irrelevant to the argument about the evidence we do have." },
                1: {
                    explanation: "This is the correct answer. The argument assumes that grain harvesting is the only possible cause of the scratches. This answer directly attacks that assumption by proposing an alternate cause for the scratches. If something else caused the scratches, then we can no longer conclude the sickles were used for grain. This is a classic alternate cause weakener (Module 2).",
                    analogy: "A detective finds a suspect with muddy shoes and concludes they must have been at the muddy crime scene. This is weakened if we discover the suspect is a professional gardener who works in mud all day."
                },
                2: { explanation: "Ritual uses are irrelevant. The argument is about whether the sickles were used for grain, not what other uses they might have had." },
                3: { explanation: "What other tools were used is irrelevant to what these specific sickles were used for." },
                4: { explanation: "Who made the sickles is irrelevant to how they were used." }
            }
        }
    },
    {
        id: 'M4-Q08',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 120 | Sec 4 | Q 24',
        difficulty: 'Medium',
        stimulus: "New evidence suggests that the collapse of Egypt's old kingdom some 4,000 years ago was caused by environmental catastrophe rather than internal social upheaval. Ocean sediments reveal a period of global cooling at the time, a condition generally associated with extended droughts. There were, no doubt, serious social problems in Egypt at the time, but they resulted from a severe dry spell.",
        question: "Which one of the following, if true, would most strengthen the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, would most strengthen the argument?",
        choices: [
            { text: "Historically, most civilizations have succumbed to internal strife rather than external factors." },
            { text: "The social problems in Egypt's old kingdom at the time of its collapse were serious enough to have caused the collapse." },
            { text: "At the time of the collapse of the old kingdom, several isolated but well-established civilizations near Egypt underwent sudden declines." },
            { text: "Egyptian records recovered from the time of the collapse explicitly refer to the deteriorating conditions of the society." },
            { text: "Shortly after the collapse of the old kingdom, Egypt was thrust into a civil war that lasted most of the next two centuries." }
        ],
        correctIndex: 2,
        explanation: "This suggests that nearby isolated civilizations underwent sudden declines at the same time as Egypt's collapse, implying a broader regional issue like environmental catastrophe rather than localized social problems, reinforcing the author's argument about environmental causes.",
        breakdown: {
            mainConclusion: "The collapse of Egypt's old kingdom was caused by an environmental catastrophe (a drought).",
            premises: ["Evidence of global cooling and drought exists at that time.", "Social problems at the time were a result of the drought."],
            choiceBreakdowns: {
                0: { explanation: "This weakens the argument by suggesting that the alternate explanation (internal strife) is historically more common." },
                1: { explanation: "This weakens the argument by stating that the alternate explanation (social problems) was a sufficient cause for the collapse on its own." },
                2: {
                    explanation: "This is the correct answer. It strengthens the argument by expanding the scope of the effect. If other, separate civilizations also collapsed at the same time, it makes a localized cause like 'Egyptian social problems' less likely. A widespread, regional cause, like the proposed environmental catastrophe, becomes a much more plausible explanation for all the collapses. This helps rule out an alternate explanation.",
                    analogy: "If your house's power goes out, you might blame your fuse box. But if all the houses on your street go dark at the same time, the cause is more likely a problem with the main power line, strengthening the 'external cause' theory."
                },
                3: { explanation: "This is neutral. The argument already acknowledges social problems ('deteriorating conditions'), but claims they were caused by the drought. This doesn't add anything new." },
                4: { explanation: "This is irrelevant. A civil war happening after the collapse doesn't tell us what caused the collapse in the first place." }
            }
        }
    },
    {
        id: 'M4-Q09',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 121 | Sec 1 | Q 3',
        difficulty: 'Medium',
        stimulus: "A recent study proves that at least some people possess an independent \"sixth sense\" that allows them to detect whether someone is watching them. In the study, subjects were seated one at a time in the center of a room facing away from a large window. On average, subjects decided correctly 60 percent of the time whether or not they were being watched through the window.",
        question: "Which one of the following, if true, most supports the conclusion drawn from the study mentioned above?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most supports the conclusion drawn from the study mentioned above?",
        choices: [
            { text: "Most of the time, subjects said they were being watched." },
            { text: "The person recording the experimental results was careful not to interact with the subjects after the experiment ended." },
            { text: "A similar result was found when the subjects were watched from another room on a video monitor." },
            { text: "The room in which the subjects were seated was not soundproof." },
            { text: "The subjects were mostly graduate students in psychology from a nearby university." }
        ],
        correctIndex: 2,
        explanation: "This states that similar results occurred when individuals were watched from another room via video monitor. It strengthens the conclusion by providing additional data supporting the sixth-sense hypothesis and ruling out alternative explanations based on physical presence cues (e.g., sounds, shadows).",
        breakdown: {
            mainConclusion: "Some people have a 'sixth sense' that can detect being watched.",
            premises: ["In an experiment, people guessed correctly if they were being watched 60% of the time (which is better than chance)."],
            choiceBreakdowns: {
                0: { explanation: "This would weaken the conclusion. If subjects just guessed 'yes' most of the time, they would be right about 50% of the time by chance, but their high 'yes' rate would explain the 60% result without needing a sixth sense." },
                1: { explanation: "This is an irrelevant detail about procedure that happened after the experiment was over." },
                2: {
                    explanation: "This is the correct answer. It strengthens the argument by ruling out several key alternate explanations. The original setup has potential flaws: maybe subjects heard faint sounds or saw a reflection. By replicating the results with a video monitor, these possibilities are eliminated. If the effect persists even when the person watching is in another room, it makes the 'sixth sense' explanation much more plausible by controlling for other sensory input.",
                    analogy: "If you think your friend has psychic powers because they guess the card you're holding, the claim is much stronger if they can still do it over the phone, ruling out the possibility they are peeking."
                },
                3: { explanation: "This weakens the conclusion by providing a clear alternate explanation: the subjects might have heard faint sounds from the person behind them, using their normal senses, not a sixth sense." },
                4: { explanation: "This detail about the subjects might suggest they were trying to please the researchers, but it doesn't logically strengthen or weaken the causal claim." }
            }
        }
    },
    {
        id: 'M4-Q10',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 119 | Sec 4 | Q 6',
        difficulty: 'Medium',
        stimulus: "Skeletal remains of early humans indicate clearly that our ancestors had fewer dental problems than we have. So, most likely, the diet of early humans was very different from ours.",
        question: "Which one of the following, if true, most strengthens the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most strengthens the argument?",
        choices: [
            { text: "A healthy diet leads to healthy teeth." },
            { text: "Skeletal remains indicate that some early humans had a significant number of cavities." },
            { text: "The diet of early humans was at least as varied as is our diet." },
            { text: "Early humans had a shorter average life span than we do, and the most serious dental problems now tend to develop late in life." },
            { text: "Diet is by far the most significant factor contributing to dental health." }
        ],
        correctIndex: 4,
        explanation: "This strengthens the plausibility of the author's explanation by identifying diet as the primary factor affecting dental health; if diet is the main determinant, a difference in diet plausibly explains the difference in dental problems between early humans and modern humans.",
        breakdown: {
            mainConclusion: "The difference in dental health between early and modern humans is likely due to a difference in diet.",
            premises: ["Early humans had fewer dental problems than modern humans."],
            choiceBreakdowns: {
                0: { explanation: "This is a general statement that helps the argument's background assumption, but it's too generic. The argument is about a *difference* in diet, not just that diet affects teeth." },
                1: { explanation: "This weakens the argument by showing the difference in dental health was not as great as the premise implies." },
                2: { explanation: "This detail about dietary variety is irrelevant to the link between diet and dental health." },
                3: { explanation: "This weakens the argument by providing a strong alternate cause. If dental problems develop late in life, the reason early humans didn't have them could be that they didn't live long enough to get them. This makes age, not diet, the key factor." },
                4: {
                    explanation: "This is the correct answer. The argument assumes that diet is the most likely cause. This choice explicitly confirms that assumption. If diet is the *most significant factor*, it makes it much more likely that the difference in dental outcomes is due to the difference in diet, effectively ruling out other potential causes as less significant.",
                    analogy: "If you argue that the star player is the reason a team won, a statement confirming that the star player is 'by far the most important factor in the team's success' would strongly support your claim."
                }
            }
        }
    },
    // ... I will continue adding questions from the PDF until I reach 30.
    {
        id: 'M4-Q11',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 140 | Sec 2 | Q 4',
        difficulty: 'Medium',
        stimulus: "Physician: Stories of people developing serious health problems shortly after receiving vaccinations have given rise to the question of whether vaccination is safe. But even if these stories are true, they need not be cause for concern. With millions of people being vaccinated every year, it is to be expected that some will develop health problems purely by coincidence shortly after receiving vaccinations.",
        question: "Which one of the following, if true, most strengthens the physician's argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most strengthens the physician's argument?",
        choices: [
            { text: "For the most part, stories of people developing serious health problems shortly after receiving vaccinations involve vaccines that were recently introduced." },
            { text: "Some of the illnesses that vaccines are designed to prevent have become so rare that even if people are not vaccinated, they are unlikely to contract those illnesses." },
            { text: "People are no more likely, on average, to develop serious health problems shortly after receiving vaccinations than shortly before receiving vaccinations." },
            { text: "The health problems that some people have developed shortly after receiving vaccinations have been more serious than the health problems that the vaccines were intended to prevent." },
            { text: "In a few cases in which people developed serious health problems shortly after taking other medications, these problems were initially attributed to coincidence but were later determined to be due to the medications." }
        ],
        correctIndex: 2,
        explanation: "This supports the physician's claim by showing that the timing of health problems relative to vaccination is consistent with coincidence rather than causation: if people are no more likely to get serious health problems after vaccination than before, vaccinations do not appear to increase the likelihood of such problems.",
        breakdown: {
            mainConclusion: "Health problems occurring after vaccination are likely a coincidence, not caused by the vaccine.",
            premises: ["Millions of people are vaccinated.", "By chance, some will inevitably get sick shortly after."],
            choiceBreakdowns: {
                0: { explanation: "This is irrelevant. The argument is about whether vaccines in general cause problems, not whether new vaccines are different from old ones." },
                1: { explanation: "This is irrelevant to the safety of vaccines. It's about their necessity, which is a different issue." },
                2: {
                    explanation: "This is the correct answer. The physician's argument rests on the idea of coincidence. This choice provides strong statistical support for that idea. If the rate of health problems is the same before and after the shot, it's like a perfect control group. This shows that the vaccine (the cause) does not increase the rate of the effect (health problems), making the observed cases look much more like random chance.",
                    analogy: "Imagine a city manager claims a new traffic light isn't causing accidents. This is strengthened by showing the accident rate at that intersection is the same in the week before and the week after the light was installed."
                },
                3: { explanation: "This weakens the argument by suggesting the potential harm from the vaccine is greater than its benefit, which would be a cause for concern." },
                4: { explanation: "This weakens the argument by showing that things attributed to coincidence can sometimes turn out to be causal, making the physician's dismissal of the stories seem less credible." }
            }
        }
    },
    {
        id: 'M4-Q12',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 141 | Sec 2 | Q 9',
        difficulty: 'Hard',
        stimulus: "Columnist: Research shows significant reductions in the number of people smoking, and especially in the number of first-time smokers in those countries that have imposed stringent restrictions on tobacco advertising. This provides substantial grounds for disputing tobacco companies' claim that advertising has no significant causal impact on the tendency to smoke.",
        question: "Which one of the following, if true, most undermines the columnist's reasoning?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most undermines the columnist's reasoning?",
        choices: [
            { text: "People who smoke are unlikely to quit merely because they are no longer exposed to tobacco advertising." },
            { text: "Broadcast media tend to have stricter restrictions on tobacco advertising than do print media." },
            { text: "Restrictions on tobacco advertising are imposed only in countries where a negative attitude toward tobacco use is already widespread and increasing." },
            { text: "Most people who begin smoking during adolescence continue to smoke throughout their lives." },
            { text: "People who are largely unaffected by tobacco advertising tend to be unaffected by other kinds of advertising as well." }
        ],
        correctIndex: 2,
        explanation: "This supplies an alternate explanation for the reduction in smoking: growing anti-tobacco attitudes cause both (i) stricter ad restrictions and (ii) fewer new smokers. That third-factor account undercuts the columnist's causal claim that the restrictions themselves produce the decline.",
        breakdown: {
            mainConclusion: "Tobacco advertising has a causal impact on the tendency to smoke.",
            premises: ["Countries with ad restrictions have seen a reduction in smoking."],
            choiceBreakdowns: {
                0: { explanation: "This is irrelevant. The argument is about what causes people, especially first-timers, to *start* smoking, not what causes them to *quit*." },
                1: { explanation: "The specific type of media is an irrelevant detail. The argument is about the effect of restrictions in general." },
                2: {
                    explanation: "This is the correct answer. It introduces a classic third factor (Module 2) that leads to a reverse causality interpretation. The argument claims Ad Restrictions (Cause) lead to Less Smoking (Effect). This choice suggests that a widespread Negative Attitude (the Third Factor) is the real cause that leads to both Ad Restrictions and Less Smoking. The ad restrictions are a symptom of the anti-smoking attitude, not the cause of the decline.",
                    analogy: "It's like noticing that cities with many 'No Littering' signs are very clean and concluding the signs cause the cleanliness. It's more likely that a city council that cares about cleanliness is the cause of both the signs and the street-sweeping crews."
                },
                3: { explanation: "This is irrelevant. How long a person smokes for doesn't change what caused them to start in the first place." },
                4: { explanation: "This is irrelevant. The argument is about the people who *are* affected by advertising, not those who are not." }
            }
        }
    },
    {
        id: 'M4-Q13',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 144 | Sec 2 | Q 9',
        difficulty: 'Hard',
        stimulus: "Two lakes in the Pawpaw mountains, Quapaw and Highwater, were suffering from serious declines in their fish populations ten years ago. Since that time, there has been a moratorium on fishing at Quapaw Lake, and the fish population there has recovered. At Highwater Lake, no such moratorium has been imposed, and the fish population has continued to decline. Thus, the ban on fishing is probably responsible for the rebound in the fish population at Quapaw Lake.",
        question: "Which one of the following, if true, most seriously weakens the argument above?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most seriously weakens the argument above?",
        choices: [
            { text: "Highwater Lake is in an area of the mountains that is highly susceptible to acid rain." },
            { text: "Prior to the ban, there was practically no fishing at Quapaw Lake." },
            { text: "Highwater Lake is much larger than Quapaw Lake." },
            { text: "Several other lakes in the Pawpaw mountains have recently had increases in their fish populations." },
            { text: "There used to be a greater variety of fish species in Highwater Lake than in Quapaw Lake, but there no longer is." }
        ],
        correctIndex: 1,
        explanation: "If there was almost no fishing at Quapaw before the ban, then the ban cannot be the 'difference-maker' that explains the rebound. Without a meaningful decrease in fishing after the ban, the author's causal story collapses.",
        breakdown: {
            mainConclusion: "The ban on fishing caused the fish population at Quapaw Lake to recover.",
            premises: ["Quapaw Lake had a fishing ban and its fish recovered.", "Highwater Lake did not have a ban and its fish continued to decline."],
            choiceBreakdowns: {
                0: { explanation: "This provides an alternate cause for why Highwater *declined*, but it doesn't weaken the explanation for why Quapaw *recovered*. It explains the control group, but not the test group." },
                1: {
                    explanation: "This is the correct answer. It directly attacks the causal mechanism. The argument assumes that the ban made a difference by reducing fishing. If there was no fishing to begin with, then the ban could not have made any difference. The proposed cause (the ban) was implemented, but it had no real-world effect, so it couldn't have caused the population rebound. This is a subtle form of 'cause without effect' (Module 3).",
                    analogy: "It's like a doctor claiming that putting a patient on a no-sugar diet cured their illness, but then finding out the patient never ate sugar in the first place. The diet change was meaningless."
                },
                2: { explanation: "The relative size of the lakes is irrelevant to the effect of the fishing ban." },
                3: { explanation: "This weakens the argument by suggesting a broader regional trend of recovery, which could be the real cause. However, it's not as strong as (B), which directly invalidates the proposed cause." },
                4: { explanation: "The variety of species is irrelevant. The argument is about the size of the total fish population." }
            }
        }
    },
    {
        id: 'M4-Q14',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 144 | Sec 2 | Q 12',
        difficulty: 'Hard',
        stimulus: "In an experiment, two groups of mice—one whose diet included ginkgo extract and one that had a normal diet—were taught to navigate a maze. The mice whose diet included ginkgo were more likely to remember the route to the maze the next day than were the other mice. Other studies have found that ginkgo reduces stress in mice, and lowering very high stress levels is known to improve recall.",
        question: "Which one of the following, if true, would most weaken the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, would most weaken the argument?",
        choices: [
            { text: "The doses of ginkgo in the diet of the mice in the experiment were significantly higher than the doses that have been shown to reduce stress in mice." },
            { text: "Neither the mice who received the ginkgo nor the other mice in the experiment exhibited physiological signs of higher-than-normal stress." },
            { text: "Some chemical substances that reduce stress in mice also at least temporarily impair their memory." },
            { text: "Scientists have not yet determined which substances in ginkgo are responsible for reducing stress in mice." },
            { text: "The mice who received the ginkgo took just as long as the other mice to learn to navigate the maze." }
        ],
        correctIndex: 1,
        explanation: "The author's causal link relies on the idea that ginkgo improved recall by lowering very high stress. If none of the mice showed elevated stress to begin with, lowering 'very high' stress cannot explain the memory effect, so the argument's mechanism is undermined.",
        breakdown: {
            mainConclusion: "Ginkgo improves memory in mice, likely by reducing stress.",
            premises: ["Mice given ginkgo had better maze recall.", "Ginkgo reduces stress, and reducing high stress improves recall."],
            choiceBreakdowns: {
                0: { explanation: "This is irrelevant. A higher dose doesn't mean it didn't also have the stress-reducing effect." },
                1: {
                    explanation: "This is the correct answer. The argument proposes a specific causal chain: Ginkgo -> Lowered High Stress -> Better Memory. This answer breaks the chain. If the mice weren't stressed to begin with, then the ginkgo couldn't have improved their memory by lowering their stress. It removes the necessary precondition for the argument's proposed mechanism to work, thus weakening the explanation.",
                    analogy: "It's like arguing a pain reliever is what made you win a race by curing your headache. This is weakened if you never had a headache to begin with. The medication couldn't have worked in the way you described."
                },
                2: { explanation: "What other substances do is irrelevant to what ginkgo does." },
                3: { explanation: "This is irrelevant. Not knowing the exact active substance doesn't change the observed effect of the whole extract." },
                4: { explanation: "Learning time is different from memory recall. The argument is about remembering the next day, not learning on the first day." }
            }
        }
    },
    {
        id: 'M4-Q15',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 128 | Sec 2 | Q 11',
        difficulty: 'Hard',
        stimulus: "A study of several hundred similarly aged subjects showed those who exercised regularly during the study were much less likely to die during the study. This indicates that exercise can actually increase one's life span.",
        question: "Which one of the following, if true, most strengthens that causal interpretation?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most strengthens that causal interpretation?",
        choices: [
            { text: "The subjects who did not exercise regularly during the study tended to have diets that were more unhealthy." },
            { text: "The subjects who did not exercise regularly during the study tended to blame their lack of exercise on a lack of time." },
            { text: "A large number of the deaths recorded were attributable to preexisting conditions or illnesses." },
            { text: "Whether or not a given subject was to exercise during the study was determined by the researchers on a random basis." },
            { text: "A person who exercises regularly is probably doing so out of concern for his or her health." }
        ],
        correctIndex: 3,
        explanation: "If exercise was assigned randomly, that rules out the selection/confounding explanation (e.g., that healthier people chose to exercise). Random assignment means differences in mortality are much more plausibly caused by the exercise intervention itself. Thus D strengthens the causal claim.",
        breakdown: {
            mainConclusion: "Exercise increases life span.",
            premises: ["A study showed a correlation between regular exercise and a lower likelihood of dying."],
            choiceBreakdowns: {
                0: { explanation: "This would weaken the conclusion by providing an alternate cause. If the non-exercisers also had unhealthy diets, it could be the diet, not the lack of exercise, that led to their higher mortality." },
                1: { explanation: "The reasons why people didn't exercise are irrelevant to the effect of the exercise itself." },
                2: { explanation: "This weakens the conclusion. If the deaths were caused by pre-existing conditions, it's less likely that exercise could have prevented them. This suggests a self-selection problem where healthier people were in the exercise group." },
                3: {
                    explanation: "This is the correct answer. This describes a randomized controlled trial, the gold standard for establishing causality. If people were randomly assigned to exercise or not, it eliminates the problem of self-selection (the alternate cause that healthier people choose to exercise). Since the groups started out equal by random chance, any difference in outcome can be more confidently attributed to the intervention (exercise).",
                    analogy: "To see if a fertilizer works, you don't let the farmer choose which plants get it. You randomly select half the plants. That way, you know the only systematic difference between the groups is the fertilizer."
                },
                4: { explanation: "This weakens the argument by highlighting the very self-selection problem that makes the initial correlation untrustworthy. Healthier, more concerned people exercise, and their better health could be the cause of their longer life, not the exercise." }
            }
        }
    },
    {
        id: 'M4-Q16',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 122 | Sec 1 | Q 12',
        difficulty: 'Hard',
        stimulus: "Poor nutrition is at the root of violent behavior in many young offenders. A prison study showed violent inmates given a high-nutrition diet improved behavior steadily over four months.",
        question: "Strengthen the causal claim that improved nutrition caused the behavior improvement (or rule out alternate explanations).",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Strengthen the causal claim that improved nutrition caused the behavior improvement (or rule out alternate explanations).",
        choices: [
            { text: "Some of the violent inmates who took part in the experiment had committed a large number of violent crimes." },
            { text: "Dietary changes are easier and cheaper to implement than other types of reform programs in institutions for young offenders." },
            { text: "Many young offenders reported that they had consumed a low-nutrient food sometime in the days before they committed a violent crime." },
            { text: "A further study investigated young offenders who chose a high-nutrient diet on their own and found that many of them were nonviolent." },
            { text: "The violent inmates in the institution who were not placed on a high-nutrient diet did not show an improvement in behavior." }
        ],
        correctIndex: 4,
        explanation: "E is the classic control-group result: the non-treated (control) inmates did not improve, while the treated (high-nutrition) group did. That pattern supports a causal link (nutrition -> improved behavior) and rules out simple time-based or other general explanations (if everyone improved, the nutrition claim would be weaker). This is the 'No Cause, No Effect' strengthening pattern.",
        breakdown: {
            mainConclusion: "Improved nutrition causes behavior to improve in violent offenders.",
            premises: ["A study showed violent inmates who were given a high-nutrition diet showed improved behavior."],
            choiceBreakdowns: {
                0: { explanation: "The severity of their past crimes is irrelevant to why their behavior improved during the study." },
                1: { explanation: "The cost or ease of the program is irrelevant to its effectiveness." },
                2: { explanation: "This provides a weak correlation but doesn't strengthen the causal claim within the prison study." },
                3: { explanation: "This shows a correlation but is weakened by self-selection bias. People who choose a good diet might be nonviolent for other reasons." },
                4: {
                    explanation: "This is the correct answer. It describes a control group, which is crucial for strengthening a causal claim. The argument's weakness is that maybe the inmates' behavior would have improved anyway (e.g., they just settled into the prison routine). By showing that a similar group who did *not* get the special diet (no cause) did *not* show improvement (no effect), it rules out this alternate explanation. This isolates the diet as the key difference-maker. This is a core concept from Module 3.",
                    analogy: "You give one plant a new fertilizer and it grows. To strengthen your claim, you show that an identical plant next to it that did *not* get the fertilizer did *not* grow."
                }
            }
        }
    },
    {
        id: 'M4-Q17',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 129 | Sec 2 | Q 22',
        difficulty: 'Hard',
        stimulus: "After the last ice age, groups of paleohumans left Siberia and crossed the Bering land bridge, which no longer exists, into North America. Archaeologists have discovered in Siberia a cache of Clovis points—the distinctive stone spear points made by paleohumans. This shows that, contrary to previous belief, the Clovis point was not invented in North America.",
        question: "Which one of the following, if true, would most strengthen the archaeologist's argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, would most strengthen the archaeologist's argument?",
        choices: [
            { text: "The Clovis points found in Siberia are older than any of those that have been found in North America." },
            { text: "The Bering land bridge disappeared before any of the Clovis points found to date were made." },
            { text: "Clovis points were more effective hunting weapons than earlier spear points had been." },
            { text: "Archaeologists have discovered in Siberia artifacts that date from after the time paleohumans left Siberia." },
            { text: "Some paleohuman groups that migrated from Siberia to North America via the Bering land bridge eventually returned to Siberia." }
        ],
        correctIndex: 0,
        explanation: "The archaeologist's conclusion depends on the Siberian Clovis cache being evidence that Clovis points originated in Siberia rather than in North America. Determining where Clovis points were invented requires identifying the oldest examples. If the Siberian Clovis points are older than any North American Clovis points, that directly supports the claim that Clovis points were invented in Siberia.",
        breakdown: {
            mainConclusion: "The Clovis point was invented in Siberia, not North America.",
            premises: ["Paleohumans migrated from Siberia to North America.", "Clovis points have been found in Siberia."],
            choiceBreakdowns: {
                0: {
                    explanation: "This is the correct answer. The argument implies a causal story of invention and migration. To prove something was invented in Place A and then brought to Place B, you need to show it existed in Place A *first*. By establishing that the Siberian points are the oldest, this choice provides the necessary temporal evidence to support the claim of a Siberian origin.",
                    analogy: "To prove that pizza was invented in Italy and not New York, the strongest evidence would be finding records of pizza in Italy that predate any records from New York."
                },
                1: { explanation: "This would weaken the argument by making it impossible for the people who made the points to have crossed the land bridge." },
                2: { explanation: "The effectiveness of the points is irrelevant to where they were invented." },
                3: { explanation: "Finding other, later artifacts is irrelevant to the origin of these specific points." },
                4: { explanation: "This weakens the argument by providing an alternate explanation. If people returned to Siberia from North America, they could have brought the Clovis points with them, which would mean they were invented in North America after all (reverse causality)." }
            }
        }
    },
    {
        id: 'M4-Q18',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 129 | Sec 3 | Q 9',
        difficulty: 'Hard',
        stimulus: "Physician: In comparing our country with two other countries of roughly the same population size, I found that even though we face the same dietary, bacterial, and stress-related causes of ulcers as they do, prescriptions for ulcer medicines in all socioeconomic strata are much rarer here than in those two countries. It's clear that we suffer significantly fewer ulcers, per capita, than they do.",
        question: "Which one of the following, if true, most strengthens the physician's argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most strengthens the physician's argument?",
        choices: [
            { text: "The two countries that were compared with the physician's country had approximately the same ulcer rates as each other." },
            { text: "The people of the physician's country have a cultural tradition of stoicism that encourages them to ignore physical ailments rather than to seek remedies for them." },
            { text: "Several other countries not covered in the physician's comparisons have more prescriptions for ulcer medication than does the physician's country." },
            { text: "A person in the physician's country who is suffering from ulcers is just as likely to obtain a prescription for the ailment as is a person suffering from ulcers in one of the other two countries." },
            { text: "The physician's country has a much better system for reporting the number of prescriptions of a given type that are obtained each year than is present in either of the other two countries." }
        ],
        correctIndex: 3,
        explanation: "The physician is treating 'number of prescriptions' as a proxy for 'number of people with ulcers.' Choice D ties the proxy to the condition: it says that people who actually have ulcers are equally likely in all three countries to obtain prescriptions. If that is true, then fewer prescriptions in the physician's country would indeed imply fewer ulcer sufferers — making the physician's inference valid.",
        breakdown: {
            mainConclusion: "Our country has fewer ulcers per capita than the other two countries.",
            premises: ["Our country has far fewer prescriptions for ulcer medicine.", "All three countries have similar causes of ulcers."],
            choiceBreakdowns: {
                0: { explanation: "This detail about the other two countries is irrelevant to the comparison with the physician's country." },
                1: { explanation: "This weakens the argument by providing an alternate cause for the fewer prescriptions. It's not that there are fewer ulcers, but that people with ulcers are less likely to seek treatment." },
                2: { explanation: "Comparing to other, different countries is irrelevant to the argument about these specific three." },
                3: {
                    explanation: "This is the correct answer. The argument's major weakness is that it uses prescription numbers as a proxy for the actual rate of disease. This choice strengthens that proxy. If people with ulcers are equally likely to get a prescription in all three countries, then the prescription numbers are a reliable indicator of the underlying disease rate. It rules out the alternate explanation that our country's citizens are just less likely to see a doctor for their ulcers.",
                    analogy: "If you argue that there are fewer fires in your town based on the low number of fire department calls, your argument is strengthened if you can show that people in your town are just as likely to call the fire department for a fire as people in other towns."
                },
                4: { explanation: "This weakens the argument by suggesting the data is not comparable. If our country has a better reporting system, the other countries' numbers might be artificially low, making our country's prescription rate seem lower than it actually is in comparison." }
            }
        }
    },
    {
        id: 'M4-Q19',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 133 | Sec 3 | Q 16',
        difficulty: 'Hard',
        stimulus: "Travailleur Corporation has recently hired employees with experience in the bus tour industry, and its executives have also been negotiating with charter bus companies that subcontract with bus tour companies. But Travailleur has traditionally focused on serving consumers who travel primarily by air, and marketing surveys show that Travailleur's traditional consumers have not changed their vacation preferences. Therefore, Travailleur must be attempting to enlarge its consumer base by attracting new customers.",
        question: "Which one of the following, if true, would most weaken the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, would most weaken the argument?",
        choices: [
            { text: "In the past, Travailleur has found it very difficult to change its customers' vacation preferences." },
            { text: "Several travel companies other than Travailleur have recently tried and failed to expand into the bus tour business." },
            { text: "At least one of Travailleur's new employees not only has experience in the bus tour industry but has also designed air-travel vacation packages." },
            { text: "Some of Travailleur's competitors have increased profits by concentrating their attention on their customers who spend the most on vacations." },
            { text: "The industry consultants employed by Travailleur typically recommend that companies expand by introducing their current customers to new products and services." }
        ],
        correctIndex: 4,
        explanation: "The company's argument assumes that hiring bus-tour-industry employees and negotiating with charter bus companies implies Travailleur wants to enlarge its customer base (i.e., attract new, bus-traveling customers). Choice E supplies a plausible alternative: if the consultants usually advise companies to expand by getting their current customers to buy new products/services, then Travailleur's actions could instead reflect a plan to sell new products/services to its existing air-traveler customers (not to recruit new bus-travel customers).",
        breakdown: {
            mainConclusion: "Travailleur is trying to attract new customers (bus travelers).",
            premises: ["Travailleur is hiring bus tour staff and negotiating with bus companies.", "Their existing customers (air travelers) haven't changed their preferences."],
            choiceBreakdowns: {
                0: { explanation: "This strengthens the argument by confirming that their existing customers are unlikely to change, making it more necessary to find new ones." },
                1: { explanation: "The failure of other companies is irrelevant to Travailleur's intentions." },
                2: { explanation: "This is irrelevant. One employee's past experience doesn't change the company's overall strategy." },
                3: { explanation: "What competitors are doing is irrelevant to Travailleur's strategy." },
                4: {
                    explanation: "This is the correct answer. The argument assumes the reason for moving into the bus business is to get bus customers. This choice offers a powerful alternate explanation for their actions. Travailleur might be creating bus tour packages to sell to their *existing* air-travel customers as a new product. If their consultants recommend this 'new products to existing customers' strategy, it's a very plausible reason for their actions that doesn't involve attracting a new customer base. This is a classic alternate cause weakener (Module 2).",
                    analogy: "You see a steakhouse hiring a famous baker. You conclude they are trying to attract new customers who only want dessert. This is weakened if you learn their consultant told them that their existing steak-loving customers would buy more if they also offered high-quality bread and desserts."
                }
            }
        }
    },
    {
        id: 'M4-Q20',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 135 | Sec 2 | Q 19',
        difficulty: 'Hard',
        stimulus: "One theory to explain the sudden extinction of all dinosaurs points to 'drug overdoses' as the cause. Angiosperms, a certain class of plants, first appeared at the time that dinosaurs became extinct. These plants produce amino-acid-based alkaloids that are psychoactive agents. Most plant-eating mammals avoid these potentially lethal poisons because they taste bitter. Moreover, mammals have livers that help detoxify such drugs. However, dinosaurs could neither taste the bitterness nor detoxify the substance once it was ingested. This theory receives its strongest support from the fact that it helps explain why so many dinosaur fossils are found in unusual and contorted positions.",
        question: "Which one of the following, if true, most undermines the theory presented above?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most undermines the theory presented above?",
        choices: [
            { text: "Many fossils of large mammals are found in contorted positions." },
            { text: "Angiosperms provide a great deal of nutrition." },
            { text: "Carnivorous dinosaurs mostly ate other, vegetarian, dinosaurs that fed on angiosperms." },
            { text: "Some poisonous plants do not produce amino-acid-based alkaloids." },
            { text: "Mammals sometimes die of drug overdoses from eating angiosperms." }
        ],
        correctIndex: 0,
        explanation: "The theory uses the contorted positions of many dinosaur fossils as key evidence that dinosaurs were debilitated (by ingesting angiosperm poisons) before death. If many large mammal fossils are also found in similarly contorted positions (choice A), then the contorted posture is not unique to dinosaurs and thus can no longer be used as special evidence that dinosaurs died from angiosperm poisoning. That undercuts the principal support for the 'drug overdose' hypothesis and therefore most strongly undermines it.",
        breakdown: {
            mainConclusion: "Dinosaurs went extinct from overdosing on poisonous plants (angiosperms).",
            premises: ["Angiosperms appeared when dinosaurs went extinct.", "Dinosaurs couldn't taste or detoxify the poisons in them, unlike mammals.", "Many dinosaur fossils are found in contorted positions, suggesting a drugged state."],
            choiceBreakdowns: {
                0: {
                    explanation: "This is the correct answer. The argument uses the 'contorted positions' as key, unique evidence for its poisoning theory. This choice shows that the evidence isn't unique at all. If mammals, who could taste and detoxify the plants, are also found in these positions, then the positions cannot be evidence of poisoning. It suggests the contortions are a normal result of the fossilization process for any large animal, completely removing a key piece of the argument's support.",
                    analogy: "A prosecutor claims a victim died of a rare poison, and the key evidence is a specific blue mark on their skin. The argument is destroyed if it's shown that the blue mark is a common, natural result of decomposition for all bodies."
                },
                1: { explanation: "The nutritional value is irrelevant. A food can be nutritious and poisonous at the same time." },
                2: { explanation: "This strengthens the argument by providing a mechanism for how even carnivorous dinosaurs could have been poisoned." },
                3: { explanation: "This is irrelevant. The argument is about the poisonous plants that *do* produce alkaloids." },
                4: { explanation: "This strengthens the argument by showing that the plants are indeed potent enough to kill large animals." }
            }
        }
    },
    {
        id: 'M4-Q21',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 137 | Sec 3 | Q 13',
        difficulty: 'Hard',
        stimulus: "Psychologist: Identical twins are virtually the same genetically. Moreover, according to some studies, identical twins separated at birth and brought up in vastly different environments show a strong tendency to report similar ethical beliefs, dress in the same way, and have similar careers. Thus, many of our inclinations must be genetic in origin, and not subject to environmental influences.",
        question: "Which one of the following, if true, would most weaken the psychologist's argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, would most weaken the psychologist's argument?",
        choices: [
            { text: "Many people, including identical twins, undergo radical changes in their lifestyles at some point in their lives." },
            { text: "While some studies of identical twins separated at birth reveal a high percentage of similar personality traits, they also show a few differences." },
            { text: "Scientists are far from being able to link any specific genes to specific inclinations." },
            { text: "Identical twins who grow up together tend to develop different beliefs, tastes, and careers in order to differentiate themselves from each other." },
            { text: "Twins who are not identical tend to develop different beliefs, tastes, and careers." }
        ],
        correctIndex: 3,
        explanation: "The psychologist's argument infers that similarity of inclinations across separated identical twins shows those inclinations are genetic (not environmental). Choice D supplies a plausible environmental influence: when identical twins grow up together, they often deliberately develop different beliefs/tastes/careers to differentiate themselves. That fact shows how strong environmental and social pressures can shape inclinations even for genetically identical people.",
        breakdown: {
            mainConclusion: "Many of our inclinations are genetic, not environmental.",
            premises: ["Identical twins separated at birth (different environments) show many similarities."],
            choiceBreakdowns: {
                0: { explanation: "Changes over a lifetime are irrelevant. The argument is about the similarities they have at any given point." },
                1: { explanation: "The existence of some differences doesn't weaken the argument about the surprising number of similarities." },
                2: { explanation: "Our inability to find the specific genes doesn't mean they don't exist. This is about scientific limits, not a logical flaw in the argument." },
                3: {
                    explanation: "This is the correct answer. The argument's strength comes from twins in different environments being similar. This choice shows that twins in the *same* environment actively become *different*. This suggests that the environment has a huge, paradoxical impact. The separated twins might be similar precisely *because* they lack the environmental pressure to differentiate from each other. This re-frames the evidence, suggesting the environment is a powerful cause of both similarity (in the separated case) and difference (in the together case), which weakens the 'genetics-only' conclusion.",
                    analogy: "It's like arguing that two plants are a certain height purely due to genetics because they grew to the same height in separate labs. The argument is weakened if you learn that when you put the two plants in the same pot, one of them grows extra tall to compete for sunlight, showing the environment has a huge, previously unseen effect."
                },
                4: { explanation: "This is expected. Non-identical twins are genetically different, so we expect them to be different. This doesn't affect the argument about identical twins." }
            }
        }
    },
    {
        id: 'M4-Q22',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 147 | Sec 1 | Q 21',
        difficulty: 'Hard',
        stimulus: "People with higher-than-average blood levels of a normal dietary by-product called homocysteine are twice as likely to be diagnosed with Alzheimer's disease as are those with average or below-average homocysteine levels. Thus, it is likely that the risk of developing Alzheimer's disease could be reduced by including in one's diet large amounts of B vitamins and folic acid, which convert homocysteine into substances known to have no relation to Alzheimer's disease.",
        question: "Which one of the following, if true, most seriously weakens the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most seriously weakens the argument?",
        choices: [
            { text: "Many Alzheimer's patients have normal homocysteine levels." },
            { text: "The substances into which homocysteine is converted can sometimes have harmful effects unrelated to Alzheimer's disease." },
            { text: "B vitamins and folic acid are not metabolized by the body very efficiently when taken in the form of vitamin-mineral supplements." },
            { text: "People whose relatives contracted Alzheimer's disease are much more likely to develop Alzheimer's than those whose relatives did not." },
            { text: "Alzheimer's disease tends to increase the levels of homocysteine in the blood." }
        ],
        correctIndex: 4,
        explanation: "E gives a reverse-causation explanation: Alzheimer's could cause the elevated homocysteine rather than elevated homocysteine causing Alzheimer's. If true, lowering homocysteine via vitamins would not reduce Alzheimer's risk, so E strongly weakens the author's recommendation.",
        breakdown: {
            mainConclusion: "Taking B vitamins to lower homocysteine will likely reduce the risk of Alzheimer's.",
            premises: ["High homocysteine is correlated with a higher risk of Alzheimer's.", "B vitamins lower homocysteine."],
            choiceBreakdowns: {
                0: { explanation: "This doesn't weaken the claim. The argument is about risk, not a one-to-one diagnosis. High homocysteine could be one of several risk factors." },
                1: { explanation: "Other harmful effects are irrelevant to whether the vitamins would reduce the risk of Alzheimer's specifically." },
                2: { explanation: "The argument says to include them 'in one's diet', not necessarily as supplements. This doesn't block the proposed solution." },
                3: { explanation: "The existence of a genetic risk factor is irrelevant to whether this dietary strategy could also work." },
                4: {
                    explanation: "This is the correct answer. The argument assumes the causal arrow is: High Homocysteine -> Alzheimer's. This choice reverses the arrow: Alzheimer's -> High Homocysteine. If the disease itself causes the high levels of the byproduct, then lowering the byproduct with vitamins would just be treating a symptom. It would do nothing to affect the underlying disease. This is a classic reverse causality weakener (Module 2).",
                    analogy: "It's like noticing that people with lung cancer cough a lot and concluding that coughing causes lung cancer, so we should sell cough drops to prevent it. In reality, the cancer causes the cough, and treating the cough does nothing for the cancer."
                }
            }
        }
    },
    {
        id: 'M4-Q23',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 147 | Sec 1 | Q 19',
        difficulty: 'Hard',
        stimulus: "Burnt lichen and grass have been found in many Neanderthal fireplaces. Lichen and grass produce a lot of smoke but do not burn with intense heat or bright light as wood does. Archaeologists infer that Neanderthals used smoky fires (e.g., burning lichen/grass) for purposes that favor smoke (such as preserving meat), not merely for bright/hot flames.",
        question: "Which one of the following, if true, most weakens the archaeologists' argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most weakens the archaeologists' argument?",
        choices: [
            { text: "In close proximity to the fireplaces with lichen and grass are other fireplaces that, evidence suggests, burned material that produced more heat than smoke." },
            { text: "In the region containing the Neanderthal fireplaces in which lichen and grass were burnt, no plants that could be burned more effectively to produce heat or light were available 60,000 years ago." },
            { text: "Some of the fireplaces containing burnt lichen are in regions in which lichen is not believed to have been plentiful and so would have had to have been brought in from some distance." },
            { text: "There is clear evidence that at least some groups of Neanderthals living more recently than 60,000 years ago developed methods of preserving meat other than smoking it." },
            { text: "The ability to preserve meat through smoking would have made the Neanderthal humans less vulnerable to poor periods of hunting." }
        ],
        correctIndex: 1,
        explanation: "B supplies an alternate explanation: smoky fuels were used because better fuels weren't available, not because Neanderthals preferred smoky fires for preservation. That undermines the inference that smoky fires indicate an intentional preservation practice.",
        breakdown: {
            mainConclusion: "Neanderthals intentionally chose smoky fuels for a specific purpose like preserving meat.",
            premises: ["Neanderthals burned lichen and grass.", "Lichen and grass produce smoky, low-heat fires."],
            choiceBreakdowns: {
                0: { explanation: "This strengthens the argument by showing they had a choice. If they built hot fires sometimes and smoky fires other times, it suggests they were choosing the fire type for a specific purpose." },
                1: {
                    explanation: "This is the correct answer. The argument assumes the Neanderthals made a *choice* to have a smoky fire. This choice suggests they had no other option. If lichen and grass were the only fuels available, then they didn't choose a smoky fire, they were stuck with one. This provides an alternate explanation for the evidence: the smoky fire was a result of necessity, not intention.",
                    analogy: "You find someone eating hardtack and conclude they must enjoy the taste. Your conclusion is weakened if you discover they are on a long sea voyage and it's the only food available."
                },
                2: { explanation: "This strengthens the argument. If they went to the trouble of bringing the smoky fuel from a distance, it suggests they wanted it for a specific purpose." },
                3: { explanation: "What later groups of Neanderthals did is irrelevant to what this group was doing." },
                4: { explanation: "This is a general statement that supports the idea that smoking meat would be a useful skill, which slightly strengthens the argument's plausibility." }
            }
        }
    },
    {
        id: 'M4-Q24',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 155 | Sec 1 | Q 19',
        difficulty: 'Hard',
        stimulus: "Productivity growth in industrialized nations dropped substantially since computer technology became widespread. The argument concludes that a business's increased reliance on computer technology probably has not improved its productivity growth.",
        question: "Which one of the following, if true, most weakens the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most weakens the argument?",
        choices: [
            { text: "The industries that rely most heavily on computer technology have been burdened by inefficiencies that have substantially hindered their productivity growth." },
            { text: "Productivity growth in many less industrialized nations has also dropped substantially since the 1960s and 1970s." },
            { text: "Productivity growth in industries responsible for producing computer technology has increased substantially as computer technology has become more widespread." },
            { text: "Within any given industry, the businesses whose productivity growth has been greatest have been those that have invested most heavily in computer technology." },
            { text: "Within the next few years, recent technological advances will almost certainly make investments in computer technology among the most effective ways for any business to improve productivity." }
        ],
        correctIndex: 3,
        explanation: "D shows that, controlling for industry, firms that invested heavily in computer tech had the largest productivity gains — a direct counterargument to the claim that computer reliance didn't improve productivity. That makes the author's generalization much less plausible.",
        breakdown: {
            mainConclusion: "Increased reliance on computer technology has not improved productivity growth.",
            premises: ["Since computers became widespread, overall productivity growth has dropped."],
            choiceBreakdowns: {
                0: { explanation: "This strengthens the argument by providing a potential mechanism for how computers could have hindered productivity." },
                1: { explanation: "What happened in less industrialized nations is irrelevant to the argument about industrialized ones." },
                2: { explanation: "This is irrelevant. The argument is about using computers, not making them." },
                3: {
                    explanation: "This is the correct answer. The argument makes a broad, national-level correlation. This choice zooms in and looks at the data more closely. By controlling for industry, it shows that within any specific field, the companies that used computers *the most* were the *most* productive. This is a direct reversal of the argument's conclusion. It suggests that while the national average is down for other reasons, computers are actually having a strong positive effect on the businesses that use them.",
                    analogy: "Imagine arguing that a new fertilizer is bad for crops because the country's total crop yield went down the year it was introduced. Your argument is destroyed if you learn that, within every single farm, the fields that used the fertilizer grew twice as much as the fields that didn't, and the national drop was due to a drought."
                },
                4: { explanation: "Future possibilities are irrelevant. The argument is about the effect technology has had up to this point." }
            }
        }
    },
    {
        id: 'M4-Q25',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 142 | Sec 2 | Q 11',
        difficulty: 'Hard',
        stimulus: "In a mall parking study drivers averaged 32 seconds to pull out when no one waited, 39 seconds if someone waited patiently, and 51 seconds if someone honked impatiently. The study concludes drivers feel possessive of their spaces when another driver wants them, causing them to take longer to leave.",
        question: "Which one of the following, if true, most seriously weakens the reasoning?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most seriously weakens the reasoning?",
        choices: [
            { text: "The more pressure most drivers feel because others are waiting for them to perform maneuvers with their cars, the less quickly they are able to perform them." },
            { text: "The amount of time drivers spend entering a parking space is not noticeably affected by whether other drivers are waiting for them to do so." },
            { text: "It is considerably more difficult and time consuming for a driver to maneuver a car out of a parking space if another car is waiting to enter that space nearby." },
            { text: "Parking spaces in shopping mall parking lots are unrepresentative of parking spaces in general with respect to the likelihood that other cars will be waiting to enter them." },
            { text: "Almost any driver leaving a parking space will feel angry at another driver who honks impatiently, and this anger will influence the amount of time spent leaving the space." }
        ],
        correctIndex: 0,
        explanation: "A offers an alternate causal mechanism: the pressure/awareness of being watched makes drivers act more cautiously and therefore slower. That explanation removes the necessity of a 'possessiveness' psychological interpretation and so weakens the study's claimed cause.",
        breakdown: {
            mainConclusion: "A feeling of possessiveness causes drivers to leave a parking space more slowly when someone is waiting.",
            premises: ["Drivers take longer to leave when someone is waiting, and even longer when someone honks."],
            choiceBreakdowns: {
                0: {
                    explanation: "This is the correct answer. The study offers a psychological explanation (possessiveness). This choice provides a simpler, mechanical explanation: performance anxiety. If being watched makes people more careful and slower, that fully explains the data without needing to invent a feeling of 'possessiveness'. This is a classic alternate cause weakener (Module 2).",
                    analogy: "A basketball player misses a crucial free throw. You conclude they 'choked' due to a lack of mental toughness. Your conclusion is weakened if you find out that a fan shined a laser pointer in their eyes during the shot. The physical interference is a better explanation than the psychological one."
                },
                1: { explanation: "Entering a space is irrelevant to the argument about leaving one." },
                2: { explanation: "This strengthens the argument by confirming that the presence of another car adds a delay. While it attributes the delay to difficulty, the 'possessiveness' could still be a factor in why it's more difficult." },
                3: { explanation: "This is irrelevant. The argument is about driver psychology, not whether the mall is a representative sample of all parking lots." },
                4: { explanation: "This might explain the extra delay for honking, but it doesn't explain the initial delay from someone just waiting patiently. Choice (A) explains both delays with a single principle." }
            }
        }
    },
    {
        id: 'M4-Q26',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 125 | Sec 2 | Q 14',
        difficulty: 'Hard',
        stimulus: "The number of serious traffic accidents (accidents resulting in hospitalization or death) that occurred on Park Road from 1986 to 1990 was 35 percent lower than the number of serious accidents from 1981 to 1985. The speed limit on Park Road was lowered in 1986. Hence, the reduction of the speed limit led to the decrease in serious accidents.",
        question: "Which one of the following statements, if true, most weakens the argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following statements, if true, most weakens the argument?",
        choices: [
            { text: "The number of speeding tickets issued annually on Park Road remained roughly constant from 1981 to 1990." },
            { text: "Beginning in 1986, police patrolled Park Road much less frequently than in 1985 and previous years." },
            { text: "The annual number of vehicles using Park Road decreased significantly and steadily from 1981 to 1990." },
            { text: "The annual number of accidents on Park Road that did not result in hospitalization remained roughly constant from 1981 to 1990." },
            { text: "Until 1986 accidents were classified as 'serious' only if they resulted in an extended hospital stay." }
        ],
        correctIndex: 2,
        explanation: "C provides an alternative explanation for the drop in serious accidents: fewer vehicles using the road would reduce accidents regardless of speed limit changes. That undermines the causal claim that lowering the speed limit was the reason for the decrease.",
        breakdown: {
            mainConclusion: "Lowering the speed limit caused the decrease in serious accidents.",
            premises: ["The speed limit was lowered in 1986.", "Serious accidents were 35% lower in the period after 1986 compared to the period before."],
            choiceBreakdowns: {
                0: { explanation: "This is tricky. Constant tickets could mean people are still speeding (weakening) or that enforcement is consistent (neutral). It doesn't provide a clear alternate cause." },
                1: { explanation: "This strengthens the argument. If there was less police presence, you'd expect more accidents. The fact that accidents went down anyway makes the speed limit's effect seem even more powerful." },
                2: {
                    explanation: "This is the correct answer. It provides a powerful alternate cause (Module 2). If there are fewer cars on the road, there will be fewer accidents, regardless of the speed limit. The drop in traffic volume, not the change in the speed limit, is the likely cause of the drop in accidents.",
                    analogy: "A store's profits decline. The manager blames a new marketing campaign, but ignores the fact that a major factory in the town closed and half the population moved away. The loss of customers is the real cause."
                },
                3: { explanation: "This strengthens the argument by isolating the effect to only 'serious' accidents, which are the ones most likely to be affected by high speeds." },
                4: { explanation: "This might weaken the argument by suggesting a change in definition, but a change to a more inclusive definition should have *increased* the number of serious accidents, so the fact they still went down strengthens the claim." }
            }
        }
    },
    {
        id: 'M4-Q27',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 127 | Sec 2 | Q 8',
        difficulty: 'Hard',
        stimulus: "This boulder is volcanic in origin and yet the rest of the rock in this area is sedimentary. Since this area was covered by southward-moving glaciers during the last ice age, this boulder was probably deposited here, hundreds of miles from its geological birthplace, by a glacier.",
        question: "Which one of the following, if true, most seriously undermines the conclusion drawn in the argument above?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most seriously undermines the conclusion drawn in the argument above?",
        choices: [
            { text: "Most boulders that have been moved by glaciers have not been moved more than 100 miles." },
            { text: "The closest geological source of volcanic rock is 50 miles south of this boulder." },
            { text: "The closest geological source of volcanic rock is 50 miles north of this boulder." },
            { text: "There are no geological sources of volcanic rock north of this boulder." },
            { text: "No other boulders of volcanic origin exist within 50 miles of this boulder." }
        ],
        correctIndex: 3,
        explanation: "D directly attacks the author's geological-deposit hypothesis by showing it would be impossible for the glacier-transport hypothesis to produce this boulder at the site (no source northward), undermining the conclusion that the boulder was carried here by glacial movement.",
        breakdown: {
            mainConclusion: "A glacier carried this volcanic boulder here from a source hundreds of miles away.",
            premises: ["The boulder is volcanic, but the surrounding rock is sedimentary.", "Glaciers moved southward over this area during the ice age."],
            choiceBreakdowns: {
                0: { explanation: "This weakens the claim that it was carried 'hundreds' of miles, but doesn't destroy the core idea that it was carried by a glacier." },
                1: { explanation: "This weakens the argument. If the source is to the south, a southward-moving glacier could not have picked it up and deposited it here." },
                2: { explanation: "This doesn't weaken the argument. A source 50 miles north is consistent with a southward-moving glacier, even if it contradicts the 'hundreds of miles' detail." },
                3: {
                    explanation: "This is the correct answer. The entire argument rests on the glacier moving south. For the glacier to deposit the boulder here, it must have picked it up somewhere to the north. If there are no volcanic sources to the north, then it's impossible for a southward-moving glacier to have brought the boulder. This makes the central mechanism of the argument impossible.",
                    analogy: "You claim a package was delivered by a mail carrier who only walks east on your street. Your claim is destroyed if you learn the package's origin is a post office east of your house. The mail carrier could not have delivered it."
                },
                4: { explanation: "The lack of other volcanic boulders is irrelevant to where this specific one came from." }
            }
        }
    },
    {
        id: 'M4-Q28',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 134 | Sec 1 | Q 13',
        difficulty: 'Hard',
        stimulus: "Scientists compared a large group of joggers who habitually stretch before jogging to an equal number of joggers who do not stretch. Both groups incurred roughly the same number of injuries. This indicates that stretching before jogging does not help to prevent injuries.",
        question: "Which one of the following, if true, most weakens the medical researcher's argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most weakens the medical researcher's argument?",
        choices: [
            { text: "For both groups of joggers compared by the scientists, the rate of jogging injuries during the study was lower than the overall rate of jogging injuries." },
            { text: "Among the joggers in the groups compared by the scientists, many of those previously injured while jogging experienced difficulty in their efforts to perform stretches." },
            { text: "Most jogging injuries result from falls, collisions, and other mishaps on which the flexibility resulting from stretching would have little if any effect." },
            { text: "The more prone a jogger is to jogging injuries, the more likely he or she is to develop the habit of performing stretches before jogging." },
            { text: "Studies have found that, for certain forms of exercise, stretching beforehand can reduce the severity of injuries resulting from that exercise." }
        ],
        correctIndex: 3,
        explanation: "D points to self-selection: people more injury-prone may be the ones who stretch, so similar injury rates would hide a protective effect of stretching. If more injury-prone people stretch yet still match the non-stretchers' injury rate, stretching could indeed help - making D a strong weakening response to the author's anti-conclusion.",
        breakdown: {
            mainConclusion: "Stretching before jogging does not help prevent injuries.",
            premises: ["A study showed that joggers who stretch have the same injury rate as joggers who don't."],
            choiceBreakdowns: {
                0: { explanation: "This is irrelevant. The overall rate of jogging injuries doesn't affect the comparison between the two groups in the study." },
                1: { explanation: "This is irrelevant. Difficulty stretching for some people doesn't change the overall group statistics." },
                2: { explanation: "This strengthens the conclusion. If stretching doesn't affect the types of injuries joggers get, it supports the idea that stretching is not helpful." },
                3: {
                    explanation: "This is the correct answer. It shows that the two groups were not comparable to begin with due to self-selection bias (an alternate cause from Module 2). The argument assumes both groups have the same underlying injury risk. This choice says the stretching group is actually made up of more injury-prone people. If this high-risk group stretches and manages to have the *same* injury rate as the low-risk non-stretching group, it implies the stretching is actually having a powerful protective effect. Without it, their injury rate would be much higher.",
                    analogy: "You compare two groups of cars: one group gets special safety inspections, the other doesn't. Both have the same accident rate. You conclude the inspections don't work. Your conclusion is weakened if you find out the cars selected for inspection were all 20-year-old rust buckets, while the other group was brand new cars. The fact that the old cars had the same rate as the new ones proves the inspections were actually very effective."
                },
                4: { explanation: "What happens in other forms of exercise is irrelevant to the argument about jogging." }
            }
        }
    },
    {
        id: 'M4-Q29',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 158 | Sec 4 | Q 14',
        difficulty: 'Hard',
        stimulus: "Psychologist: Most people's blood pressure rises when they talk. But extroverted people experience milder surges when they speak than introverted people, for whom speaking is more stressful. This suggests that the increases result from the psychological stress of communicating rather than from the physical exertion of speech production.",
        question: "Which one of the following, if true, most strengthens the psychologist's argument?",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Which one of the following, if true, most strengthens the psychologist's argument?",
        choices: [
            { text: "Medications designed to lower blood pressure do not keep the people who take them from experiencing blood-pressure fluctuations when speaking." },
            { text: "In general, the lower one's typical blood pressure, the more one's blood pressure will increase under stress." },
            { text: "Introverted people who do not have chronically high blood pressure often sense the rises in blood pressure that occur when they speak in conversation." },
            { text: "Deaf people experience increased blood pressure when they sign, but no change when they move their hands for other reasons." },
            { text: "Extroverted people are more likely to have chronically high blood pressure than introverted people and are more likely to take medication to lower their blood pressure." }
        ],
        correctIndex: 3,
        explanation: "D shows that a non-vocal form of communication (signing) causes the same blood-pressure increase when it is psychologically stressful (signing to communicate) but not when the same hand movements occur for other reasons. This supports the psychologist's claim that the effect is due to psychological stress of communicating rather than to the physical act of producing speech.",
        breakdown: {
            mainConclusion: "The rise in blood pressure from talking is caused by psychological stress, not physical exertion.",
            premises: ["Introverts (more stressed by speaking) have a larger blood pressure surge than extroverts."],
            choiceBreakdowns: {
                0: { explanation: "This is irrelevant. The existence of fluctuations doesn't tell us their cause." },
                1: { explanation: "This might weaken the argument if extroverts tend to have lower blood pressure, as it would provide a non-psychological reason for their larger surge." },
                2: { explanation: "Sensing the rise is irrelevant to what causes the rise in the first place." },
                3: {
                    explanation: "This is the correct answer. It provides a perfect experimental control. The argument needs to separate the physical act from the psychological stress. Signing is a form of communication (psychological stress) that uses physical exertion (hand movement). This choice shows that when the hand movements are used for communication, blood pressure rises. When the same hand movements are used for other reasons (no psychological stress of communication), it does not. This perfectly isolates the psychological stress of communication as the true cause.",
                    analogy: "If you want to prove that the stress of a test, not the physical act of writing, raises your heart rate, this is like showing your heart rate goes up when you write an essay for a grade, but not when you write the exact same essay for fun."
                },
                4: { explanation: "This weakens the conclusion by suggesting that the baseline blood pressures of the two groups are different, which could be an alternate explanation for the different surges they experience." }
            }
        }
    },
    {
        id: 'M4-Q30',
        moduleId: 'strengthen-weaken',
        sourcePT: 'PT 110 | Sec 3 | Q 24',
        difficulty: 'Hard',
        stimulus: "Ringtail opossums (native to Australia) raised in captivity and returned to the wild were monitored; 75% of those were killed by foxes. Conservationists concluded the native ringtail population was endangered not by scarcity of food but by non-native predator species such as foxes against which the opossum had not developed natural defenses.",
        question: "Find an answer that most strongly supports the conservationists' argument.",
        // Fix: Added missing 'stem' property to conform to the Question type.
        stem: "Find an answer that most strongly supports the conservationists' argument.",
        choices: [
            { text: "There are fewer non-native predator species that prey on the ringtail opossum than there are native species that prey on the ringtail opossum." },
            { text: "Foxes, which were introduced into Australia over 200 years ago, adapted to the Australian climate less successfully than did some other foreign species." },
            { text: "The ringtail opossums that were raised in captivity were fed a diet similar to that of wild ringtail opossums." },
            { text: "Few of the species that compete with the ringtail opossum for food sources are native to Australia." },
            { text: "Ringtail opossums that grow to adulthood in the wild defend themselves against foxes no more successfully than do ringtail opossums raised in captivity." }
        ],
        correctIndex: 4,
        explanation: "E strengthens the claim that foxes are a significant threat to ringtail opossums in general (not just to those naive from captivity). If wild-raised adults defend themselves no better than captive-raised ones, that suggests the high mortality is not just due to captivity-based naiveté; rather it supports the conclusion that foxes are a major threat to the species overall.",
        breakdown: {
            mainConclusion: "Foxes (a non-native predator) are the cause of the ringtail opossum's endangerment.",
            premises: ["75% of captive-raised opossums reintroduced to the wild were killed by foxes."],
            choiceBreakdowns: {
                0: { explanation: "The number of other predator species is irrelevant to the impact of foxes." },
                1: { explanation: "How well foxes adapted compared to other species is irrelevant to the damage they cause to opossums." },
                2: { explanation: "This rules out starvation as a reason the captive opossums were caught, which offers minor support, but isn't the strongest option." },
                3: { explanation: "This is about competition for food, but the conclusion states the problem is predation, not scarcity of food." },
                4: {
                    explanation: "This is the correct answer. The argument has a major weakness: the evidence is only about captive-raised opossums, who might be naive and easy prey. The conclusion, however, is about the entire wild population. This choice closes that gap. If wild opossums are just as bad at defending themselves as the captive ones, it proves that the high death rate isn't due to the opossums' naive upbringing, but to a fundamental lack of defense against this new predator. This rules out a key alternate explanation.",
                    analogy: "You find that city tourists get lost in the woods easily and conclude that the woods are inherently confusing. Your argument is weak, as tourists are inexperienced. It's strengthened if you show that even experienced local hikers get lost just as often. This proves the woods, not the people, are the problem."
                }
            }
        }
    }
];

export const ALL_QUESTIONS: Record<QuestionModuleId, Question[]> = {
  'correlation-causation': module1Questions,
  'common-causes': module2Questions,
  'reverse-causality': module3Questions,
  'strengthen-weaken': module4Questions,
};

const allQuestionsFlat = Object.values(ALL_QUESTIONS).flat();

export const getQuestionById = (id: string): Question | undefined => {
  return allQuestionsFlat.find(q => q.id === id);
};