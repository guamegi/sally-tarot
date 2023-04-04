export default {
  data: [
    {
      id: 0,
      name: "The Fool",
      isReverse: false,
      image: require("assets/images/cards/0.jpg"),
      upright: {
        keyword: ["Beginnings", "innocence", "spontaneity", "a free spirit"],
        meaning:
          "The Fool card represents new beginnings, adventure, taking risks, trust in instincts, and living in the moment. It encourages you to embrace your inner free spirit and not worry too much about the future or consequences. The card suggests that you have unlimited potential and should take the leap of faith into the unknown with optimism and courage.",
      },
      reverse: {
        keyword: ["Holding back", "recklessness", "risk-taking"],
        meaning:
          "In reverse, The Fool card suggests that you may be holding back or feeling stuck. You may be too cautious or hesitant to take risks, or you may be taking too many risks without considering the consequences. It's important to find a balance between spontaneity and caution, and to be mindful of your actions and decisions.",
      },
      description: `The Fool is numbered 0 – the number of unlimited potential – and so does not have a specific place in the sequence of the Tarot cards. The Fool can be placed either at the beginning of the Major Arcana or at the end. The Major Arcana is often considered The Fool’s journey through life and as such, he is ever present and therefore needs no number. 
  
    On The Fool Tarot card, a young man stands on the edge of a cliff, without a care in the world, as he sets out on a new adventure. He is gazing upwards toward the sky (and the Universe) and is seemingly unaware that he is about to skip off a precipice into the unknown. Over his shoulder rests a modest knapsack containing everything he needs – which isn’t much (let’s say he’s a minimalist). The white rose in his left hand represents his purity and innocence. And at his feet is a small white dog, representing loyalty and protection, that encourages him to charge forward and learn the lessons he came to learn. The mountains behind The Fool symbolize the challenges yet to come. They are forever present, but The Fool doesn’t care about them right now; he’s more focused on starting his expedition.`,
    },
    {
      id: 1,
      name: "The Magician",
      isReverse: false,
      image: require("assets/images/cards/1.jpg"),
      upright: {
        keyword: ["Manifestation", "resourcefulness", "power", "alignment"],
        meaning:
          "The Magician card represents your ability to manifest your desires, be resourceful, and tap into your power and potential. It suggests that you have everything you need within you to achieve your goals, and encourages you to align your thoughts, intentions, and actions to create the reality you desire.",
      },
      reverse: {
        keyword: ["Manipulation", "poor planning", "misuse of power"],
        meaning:
          "In reverse, The Magician card suggests that you may be using your power for selfish or unethical purposes, or that you may be lacking in planning and foresight. It's important to be mindful of your actions and intentions, and to use your power for the greater good.",
      },
      description: `The Magician is numbered 1 and is the first card in the Major Arcana. He represents the power of manifestation and the ability to tap into the universal forces to create your reality. 
  
    On The Magician Tarot card, a young man stands before a table adorned with the symbols of the four elements - pentacle, wand, cup, and sword - representing earth, air, water, and fire, respectively. He holds a wand in his right hand, pointing it towards the heavens, and a small wand in his left hand, pointing it towards the ground. This gesture symbolizes the connection between the spiritual and physical realms, and the Magician's ability to bridge the gap between them. Above his head is the symbol for infinity, suggesting the limitless potential of the universe. The red roses on the table represent passion and desire, while the white lilies represent purity and spiritual power.`,
    },
    {
      id: 2,
      name: "The High Priestess",
      isReverse: false,
      image: require("assets/images/cards/2.jpg"),
      upright: {
        keyword: [
          "Intuition",
          "sacred knowledge",
          "divine feminine",
          "the subconscious mind",
        ],
        meaning:
          "The High Priestess card represents your intuition, inner wisdom, and connection to the divine feminine. It suggests that you have access to hidden knowledge and mysteries, and encourages you to trust your intuition and inner guidance. The card may also indicate secrets or hidden influences at play.",
      },
      reverse: {
        keyword: [
          "Secrets",
          "disconnected from intuition",
          "withdrawal and silence",
        ],
        meaning: `In reverse, The High Priestess card suggests that you may be disconnected from your intuition and inner wisdom, or that you may be suppressing your emotions or desires. The card may also indicate secrets or hidden influences being exposed, or a need for greater transparency and honesty.`,
      },
      description: `The High Priestess sits in front of a thin veil decorated with pomegranates. The veil represents the separate conscious and subconscious realms, the seen and the unseen, and serves to keep casual onlookers out. Only the initiated may enter. The pomegranates on the veil are a symbol of abundance, fertility and the divine feminine, and are sacred to Persephone who ate a pomegranate seed in the underworld and was forced to return every year.

    On either side of The High Priestess stand two pillars, marking the entrance to this sacred, mystical temple (also associated with the Temple of Solomon). One pillar is black with the letter B (Boaz, meaning ‘in his strength’) and the other is white with the letter J (Jachin, meaning ‘he will establish’). The black and white colors of the pillars symbolize duality – masculine and feminine, darkness and light – stating that knowledge and acceptance of duality are required to enter this sacred space.
    
    The High Priestess wears a blue robe with a cross on her chest and a horned diadem (or crown), both a symbol of her divine knowledge and her status as a divine ruler. In her lap, she holds a scroll with the letter TORA, signifying the Greater Law (according to A. E. Waite). It is partly covered, signifying that this sacred knowledge is both explicit and implicit, it will only be revealed when the student is ready to look beyond the material realm. The crescent moon at her feet symbolizes her connection with the divine feminine, her intuition and subconscious mind, and the natural cycles of the moon.`,
    },
    {
      id: 3,
      name: "The Empress",
      isReverse: false,
      image: require("assets/images/cards/3.jpg"),
      upright: {
        keyword: ["Femininity", "beauty", "nature", "nurturing", "abundance"],
        meaning: `The Empress represents feminine energy, creativity, nurturing, and abundance. She is a reminder to connect with nature and the cycles of life. This card can indicate a time of fertility and growth, whether it be in a creative project, a relationship, or a personal endeavor. It is a card of beauty, grace, and motherly love.`,
      },
      reverse: {
        keyword: ["Creative block", "dependence on others"],
        meaning: `In reverse, The Empress can suggest a creative block or a feeling of being stuck. It may also indicate a reliance on others or a lack of independence. It's important to connect with one's own inner resources and creativity in order to move forward.`,
      },
      description: `The Empress is a symbol of femininity and abundance. She is surrounded by nature and draws her energy from the earth. The pomegranates on her robe represent fertility and the cushion with the symbol of Venus reflects her connection with love and beauty. The Empress is a reminder to nurture oneself and others and to connect with the cycles of life. She represents the energy of creation and the power of the feminine.`,
    },
    {
      id: 4,
      name: "The Emperor",
      isReverse: false,
      image: require("assets/images/cards/4.jpg"),
      upright: {
        keyword: ["Authority", "establishment", "structure", "a father figure"],
        meaning: `The Emperor represents authority, structure, and a sense of stability. He is a father figure and a symbol of leadership and control. This card can indicate a need for discipline and order in one's life, or a time to establish oneself as a leader or mentor. It is a card of power, protection, and rationality.`,
      },
      reverse: {
        keyword: [
          "Domination",
          "excessive control",
          "lack of discipline",
          "inflexibility",
        ],
        meaning: `In reverse, The Emperor can suggest an abuse of power, excessive control, or a lack of flexibility. It may also indicate a disregard for emotions and a need to reconnect with one's intuition. It's important to balance power with empathy and understanding in order to lead effectively.`,
      },
      description: `The Emperor is a symbol of authority and control. He sits on his throne with a stern expression, representing his rational and logical nature. The ram's heads on his throne and scepter reflect his power and strength, while the ankh on his robe represents his connection to the divine. The Emperor is a reminder to establish order and structure in one's life, and to take control of one's destiny with discipline and rationality.`,
    },
    {
      id: 5,
      name: "The Hierophant",
      isReverse: false,
      image: require("assets/images/cards/5.jpg"),
      upright: {
        keyword: [
          "Spiritual wisdom",
          "religious beliefs",
          "conformity",
          "tradition",
          "institutions",
        ],
        meaning: `The Hierophant represents tradition, conformity, and adherence to established structures and institutions. It can indicate a need for spiritual guidance and seeking answers from religious or other authoritative figures. This card also highlights the importance of maintaining a sense of community and group identity.`,
      },
      reverse: {
        keyword: ["Personal beliefs", "freedom", "challenging the status quo"],
        meaning: `In reverse, The Hierophant suggests a rejection of traditional values and a desire to break free from established norms and conventions. It may indicate a need to explore unorthodox beliefs or to find a spiritual path outside of established institutions.`,
      },
      description: `The Hierophant is a figure of authority and wisdom, often associated with religious leaders or other figures who hold positions of power within established institutions. He sits between two pillars, representing the balance of masculine and feminine energies. The three tiers of his crown symbolize the three worlds of the divine, the human, and the underworld. The Hierophant reminds us of the importance of tradition and community while also encouraging us to question established beliefs and seek our own spiritual path.`,
    },
    {
      id: 6,
      name: "The Lovers",
      isReverse: false,
      image: require("assets/images/cards/6.jpg"),
      upright: {
        keyword: [
          "Love",
          "harmony",
          "relationships",
          "values alignment",
          "choices",
        ],
        meaning: `The Lovers card represents love, relationships, and choices. It is a reminder to follow your heart and make decisions based on what feels right. This card can indicate a new romantic partnership or a deepening of an existing one. It can also suggest a need for balance and harmony in all types of relationships, not just romantic ones.`,
      },
      reverse: {
        keyword: [
          "Self-love",
          "disharmony",
          "imbalance",
          "misalignment of values",
        ],
        meaning: `In reverse, The Lovers can suggest disharmony and a lack of balance in relationships. It may indicate unhealthy partnerships or a betrayal of trust. It's important to reassess your relationships and make choices that align with your values and beliefs.`,
      },
      description: `The Lovers card shows two figures, often interpreted as Adam and Eve, standing in the Garden of Eden under an angel, representing Raphael, the archangel of air, who blesses their union. The card represents the union of masculine and feminine energies and the balance that can be achieved in relationships. The Lovers can also symbolize the choices that we make in life and the importance of listening to our intuition.`,
    },
    {
      id: 7,
      name: "The Chariot",
      isReverse: false,
      image: require("assets/images/cards/7.jpg"),
      upright: {
        keyword: ["Control", "willpower", "success", "action", "determination"],
        meaning: `The Chariot represents willpower, control, and determination. This card indicates that the querent is in control of their life and has the necessary focus to achieve their goals. The Chariot can also indicate a victory or a successful journey. It reminds us that we have the power to overcome obstacles and challenges through sheer force of will.`,
      },
      reverse: {
        keyword: ["Self-discipline", "opposition", "lack of direction"],
        meaning: `In reverse, The Chariot can suggest self-doubt or a lack of control. It may indicate a defeat or a sense of being lost. This card reminds us to trust in ourselves and our abilities, and to regain control over our lives.`,
      },
      description: `The Chariot is a symbol of willpower and control. The charioteer drives the chariot with a fierce determination and focus, representing the power of the mind to overcome obstacles. The sphinxes pulling the chariot represent the opposing forces that must be harnessed and controlled. The Chariot reminds us that we are in control of our own destiny, and that victory can be achieved through focus and determination.`,
    },
    {
      id: 8,
      name: "Strength",
      isReverse: false,
      image: require("assets/images/cards/8.jpg"),
      upright: {
        keyword: [
          "Strength",
          "courage",
          "persuasion",
          "influence",
          "compassion",
        ],
        meaning:
          "Strength represents courage, inner power, and resilience. It indicates that one has the strength to overcome any obstacles or challenges. This card reminds us that true strength comes from within and that we have the power to control our own destiny.",
      },
      reverse: {
        keyword: ["Inner strength", "self-doubt", "low energy", "raw emotion"],
        meaning:
          "In reverse, Strength can suggest feelings of self-doubt, weakness, or insecurity. It may be a reminder to tap into one's inner strength and build confidence. This card can also indicate the need to be patient and gentle with oneself.",
      },
      description:
        "The Strength card depicts a woman taming a lion. This represents the power of inner strength and self-control over external forces. The infinity symbol above her head signifies the infinite potential of our inner strength. The card reminds us that true strength comes from within, and with it, we can overcome any obstacles in our path.",
    },
    {
      id: 9,
      name: "The Hermit",
      isReverse: false,
      image: require("assets/images/cards/9.jpg"),
      upright: {
        keyword: [
          "Soul-searching",
          "introspection",
          "being alone",
          "inner guidance",
        ],
        meaning:
          "The Hermit represents introspection, contemplation, and solitude. It's a time to withdraw from the outside world and focus on one's inner world. This card can indicate a need for reflection and self-discovery. It's important to take the time to understand oneself and find inner peace.",
      },
      reverse: {
        keyword: ["Isolation", "loneliness", "withdrawal"],
        meaning:
          "In reverse, The Hermit can suggest a feeling of loneliness or isolation. It may indicate a tendency to withdraw from others or a fear of social interaction. It's important to find a balance between introspection and connection with others.",
      },
      description:
        "The Hermit is a symbol of wisdom and self-discovery. He is often depicted holding a lantern, representing the light of knowledge and guidance. The snow on the mountain represents purity and clarity of thought, and the staff represents the support and guidance needed to navigate through life's challenges. The Hermit reminds us to take the time for self-reflection and to seek guidance when needed.",
    },
    {
      id: 10,
      name: "Wheel Of Fortune",
      isReverse: false,
      image: require("assets/images/cards/10.jpg"),
      upright: {
        keyword: [
          "Good luck",
          "karma",
          "life cycles",
          "destiny",
          "a turning point",
        ],
        meaning:
          "The Wheel of Fortune represents the cyclical nature of life and the constant changes that we experience. It is a reminder that everything is always in motion and that our fortunes can change at any moment. This card often indicates a turning point or a moment of fate in one's life. It can also suggest upward mobility and positive changes if approached with an open and accepting attitude.",
      },
      reverse: {
        keyword: ["Bad luck", "resistance to change", "breaking cycles"],
        meaning:
          "In reverse, the Wheel of Fortune can indicate being stuck in a negative cycle or experiencing bad luck. It may also suggest a resistance to change or a fear of the unknown. It is important to remain open and adaptable during times of transition in order to overcome obstacles and move forward.",
      },
      description:
        "The Wheel of Fortune depicts a large wheel turning in the heavens. The four figures on the corners of the card represent the four fixed signs of the zodiac (Leo, Taurus, Aquarius, and Scorpio), symbolizing stability and balance. The sphinx at the top of the wheel represents knowledge and wisdom. The snake on the right side of the wheel represents life's challenges, while the Anubis on the left represents transitions and transformation. The Wheel of Fortune reminds us that everything is in constant motion, and that we must be prepared to adapt to life's changes in order to succeed.",
    },
    {
      id: 11,
      name: "Justice",
      isReverse: false,
      image: require("assets/images/cards/11.jpg"),
      upright: {
        keyword: ["Justice", "fairness", "truth", "cause and effect", "law"],
        meaning: `Justice represents balance, fairness, and truth. This card suggests that a situation will be resolved in a just manner, and that the truth will be revealed. It is a reminder to stay true to oneself and to act with integrity. Justice can also indicate legal matters, contracts, or negotiations, and may suggest a need for compromise or finding common ground.`,
      },
      reverse: {
        keyword: ["Unfairness", "lack of accountability", "dishonesty"],
        meaning: `In reverse, Justice can indicate injustice, dishonesty, or a lack of accountability. It may suggest that a situation is not being resolved fairly, or that someone is not being truthful. It's important to reassess the situation and make sure that one is acting with integrity and seeking the truth.`,
      },
      description: `Justice is a symbol of balance and fairness. The scales in her hand represent the weighing of evidence and the balance of opposing forces. The sword represents truth and the power of the law. Justice reminds us to act with integrity and to seek the truth, even when it may be difficult. She is a reminder that fairness and balance are important in all aspects of life.`,
    },
    {
      id: 12,
      name: "The Hanged Man",
      isReverse: false,
      image: require("assets/images/cards/12.jpg"),
      upright: {
        keyword: ["Pause", "surrender", "letting go", "new perspectives"],
        meaning: `The Hanged Man represents the act of letting go, surrendering, and gaining a new perspective. It's a reminder to pause and consider the situation from a different angle. This card often indicates a sacrifice or a willingness to make a change in order to achieve one's goals.`,
      },
      reverse: {
        keyword: ["Delays", "resistance", "stalling", "indecision"],
        meaning: `In reverse, The Hanged Man can suggest stubbornness, resistance to change, or a feeling of being stuck. It's important to let go of old patterns and beliefs in order to move forward.`,
      },
      description: `The Hanged Man is often depicted upside down, suspended by one foot. This position represents surrender and sacrifice, a willingness to let go of old beliefs and perspectives. The Hanged Man invites us to see the world from a different point of view, to pause and consider our situation before making a decision. This card can indicate a time of transition, a sacrifice that must be made in order to achieve a goal, or a period of waiting and reflection. Ultimately, The Hanged Man is a symbol of letting go and gaining a new perspective.`,
    },
    {
      id: 13,
      name: "Death",
      isReverse: false,
      image: require("assets/images/cards/13.jpg"),
      upright: {
        keyword: ["Endings", "change", "transformation", "transition"],
        meaning: `Death represents the end of a cycle and the beginning of something new. It is a card of change, transformation, and transition. It may indicate a time to surrender and let go of old patterns, relationships, or beliefs that no longer serve a purpose. Although the card may seem ominous, it is a reminder that death is a natural part of the cycle of life.`,
      },
      reverse: {
        keyword: [
          "Resistance to change",
          "personal transformation",
          "inner purging",
        ],
        meaning: `In reverse, Death can indicate a resistance to change or a fear of the unknown. It may also suggest a need to let go of attachments or relationships that are preventing growth and transformation. It is important to embrace the inevitability of change and trust in the universe's plan.`,
      },
      description: `Death is a card of transformation and change. It represents the end of one cycle and the beginning of another. The skeleton riding the horse symbolizes the inevitability of death, while the bishop and child in the foreground represent the different stages of life. The rising sun in the background reminds us that life goes on, and that new beginnings are always possible.`,
    },
    {
      id: 14,
      name: "Temperance",
      isReverse: false,
      image: require("assets/images/cards/14.jpg"),
      upright: {
        keyword: ["Balance", "moderation", "patience", "purpose"],
        meaning: `Temperance is a card of balance and moderation. It suggests the need for patience and self-control, and the importance of finding harmony in all areas of life. This card also indicates a need for healing and restoration, both physically and emotionally.`,
      },
      reverse: {
        keyword: ["Imbalance", "excess", "self-healing", "re-alignment"],
        meaning: `In reverse, Temperance can indicate a lack of balance or extremes in behavior. It may suggest an overindulgence in one area of life, leading to imbalance or disharmony. It's important to find a middle ground and practice moderation in all things.`,
      },
      description: `Temperance is a card of balance and harmony. The angel on the card represents a mediator or messenger, bringing together opposing forces and finding common ground. The two cups symbolize the mixing of different elements to create something new. This card encourages patience, self-control, and the blending of different aspects of life to find a sense of wholeness.`,
    },
    {
      id: 15,
      name: "The Devil",
      isReverse: false,
      image: require("assets/images/cards/15.jpg"),
      upright: {
        keyword: [
          "Shadow self",
          "attachment",
          "addiction",
          "restriction",
          "sexuality",
        ],
        meaning: `The Devil represents the shadow side of ourselves that is ruled by fear, addiction, and materialism. It can indicate a time of feeling trapped or enslaved to our own desires or to external forces. This card reminds us to confront our fears and to take responsibility for our own actions in order to break free from negative patterns.`,
      },
      reverse: {
        keyword: [
          "Releasing limiting beliefs",
          "exploring dark thoughts",
          "detachment",
        ],
        meaning: `In reverse, The Devil suggests a release from fear, addiction, or negative patterns. It can indicate a time of self-awareness and breaking free from constraints. This card reminds us that we have the power to overcome obstacles and to find freedom in our lives.`,
      },
      description: `The Devil is a symbol of temptation, materialism, and addiction. The chains around the figures in the card represent the things that bind us and prevent us from being truly free. The card is a reminder that we have the power to break free from these chains, but we must be willing to confront our fears and take action. The Devil can also indicate a need for self-reflection and a recognition of the things that are holding us back.`,
    },
    {
      id: 16,
      name: "The Tower",
      isReverse: false,
      image: require("assets/images/cards/16.jpg"),
      upright: {
        keyword: [
          "Sudden change",
          "upheaval",
          "chaos",
          "revelation",
          "awakening",
        ],
        meaning: `The Tower is a card that represents sudden change and upheaval. It often appears in a reading when one's foundations are being shaken or when a situation is no longer sustainable. While this can be a difficult and painful process, it is often necessary in order to create space for growth and new beginnings. The Tower can also represent awakening, as it shakes us out of our complacency and forces us to confront the truth.`,
      },
      reverse: {
        keyword: [
          "Personal transformation",
          "fear of change",
          "averting disaster",
        ],
        meaning: `In reverse, The Tower can indicate a fear of change or a tendency to avoid difficult situations. It may suggest a need to confront one's fears and embrace the necessary upheaval in order to move forward. It can also indicate a delay in the process of change.`,
      },
      description: `The Tower is a card that represents sudden change and upheaval. In the image, a tower is being struck by lightning, causing it to crumble and fall apart. People are falling from the tower, indicating that the change is unexpected and may be accompanied by chaos and disruption. However, the lightning also represents a flash of insight and awareness that can come with sudden change. The Tower is a reminder to trust the process and embrace the upheaval, as it can ultimately lead to growth and transformation.`,
    },
    {
      id: 17,
      name: "The Star",
      isReverse: false,
      image: require("assets/images/cards/17.jpg"),
      upright: {
        keyword: ["Hope", "faith", "purpose", "renewal", "spirituality"],
        meaning:
          "The Star represents hope, inspiration, renewal, and spirituality. It is a card of optimism and a reminder that there is always light in the darkness. This card encourages you to connect with your higher self and trust in the universe. It is a sign that things are about to get better, and that you should keep moving forward with faith and courage.",
      },
      reverse: {
        keyword: ["Lack of faith", "despair", "self-trust", "disconnection"],
        meaning:
          "In reverse, The Star can indicate a loss of faith, depression, or hopelessness. You may be feeling disconnected from your spirituality or struggling to find meaning in your life. It's important to remember that this is only temporary, and that the light will return. Use this time to reflect on what you truly believe in and to seek out sources of inspiration and hope.",
      },
      description:
        "The Star is a symbol of hope and renewal. The woman in the card represents the connection between heaven and earth, and the water represents the flow of life. The stars in the sky represent guidance and inspiration, and the seven smaller stars represent the chakras. The Star encourages you to connect with your higher self and to trust in the universe. It is a card of optimism and a reminder that there is always light in the darkness.",
    },
    {
      id: 18,
      name: "The Moon",
      isReverse: false,
      image: require("assets/images/cards/18.jpg"),
      upright: {
        keyword: ["Illusion", "fear", "anxiety", "subconscious", "intuition"],
        meaning:
          "The Moon represents the unconscious mind, dreams, and intuition. It can indicate confusion, fear, or uncertainty, and a need to trust one's instincts. The card is often associated with the feminine and the power of the moon, and can indicate hidden or mysterious aspects of oneself or a situation.",
      },
      reverse: {
        keyword: ["Release of fear", "repressed emotion", "inner confusion"],
        meaning:
          "In reverse, The Moon can suggest a release of fear or repressed emotions. It may indicate a time to confront and overcome one's fears, or a time to delve deeper into one's own psyche and uncover hidden truths. The card can also indicate a need for clarity and a release from confusion or uncertainty.",
      },
      description:
        "The Moon is a symbol of the unconscious mind, intuition, and hidden aspects of oneself. The two dogs represent the conscious and unconscious minds, and the crayfish emerging from the water represents the emergence of repressed emotions. The moon in the sky is a symbol of feminine power and the cyclical nature of life.",
    },
    {
      id: 19,
      name: "The Sun",
      isReverse: false,
      image: require("assets/images/cards/19.jpg"),
      upright: {
        keyword: ["Positivity", "fun", "warmth", "success", "vitality"],
        meaning: `The Sun represents joy, vitality, and positive energy. It is a card of good health, success, and happiness. This card can indicate a time of renewal, growth, and new beginnings. It is a reminder to embrace life with enthusiasm and to stay optimistic even in difficult times.`,
      },
      reverse: {
        keyword: ["Inner child", "feeling down", "overly optimistic"],
        meaning: `In reverse, The Sun can suggest a temporary period of depression or lack of energy. It may also indicate a delay in success or a setback in one's plans. It's important to stay positive and to keep moving forward despite these challenges.`,
      },
      description: `The Sun is a symbol of vitality, success, and joy. The child on the horse represents innocence and the pure expression of life energy. The sunflowers in the background represent the solar plexus, which is associated with personal power and self-esteem. The Sun is a reminder to embrace life with enthusiasm and to enjoy the journey.`,
    },
    {
      id: 20,
      name: "Judgement",
      isReverse: false,
      image: require("assets/images/cards/20.jpg"),
      upright: {
        keyword: ["Judgement", "rebirth", "inner calling", "absolution"],
        meaning: `The Judgement card shows naked men, women, and children rising from their graves, arms outspread and looking up into the sky. Above, Archangel Gabriel – the Messenger of God – blows his trumpet. The people respond to his call, ready to be judged and to find out if they will be accepted into the heavens or not. In the background is an extensive mountain range, signifying the insurmountable obstacles and the impossibility of avoiding judgement.`,
      },
      reverse: {
        keyword: ["Self-doubt", "inner critic", "ignoring the call"],
        meaning: `The Judgement card in reverse suggests that you may be ignoring a call or a message that is trying to come through to you. You may be experiencing self-doubt or a harsh inner critic that is preventing you from hearing your inner voice. It's important to listen to your intuition and trust your instincts. This card can also indicate that you may be avoiding responsibility or accountability for your actions, and you need to face the consequences of your decisions.`,
      },
      description: `The Judgement card represents a time of reckoning and a call to awaken from the past and prepare for the future. It signals a time of evaluation and contemplation, where we must examine our past decisions and actions, take responsibility for them, and make amends. This card is associated with a rebirth and a new beginning, where we can release ourselves from the burdens of the past and move forward with renewed purpose and clarity.`,
    },
    {
      id: 21,
      name: "The World",
      isReverse: false,
      image: require("assets/images/cards/21.jpg"),
      upright: {
        keyword: ["Completion", "integration", "accomplishment", "travel"],
        meaning: `The World card signifies completion and accomplishment. You have achieved a significant milestone or reached the end of a long journey. This card represents a sense of wholeness and a feeling of being complete, having integrated all aspects of yourself and your life. You have learned important lessons along the way, and now you can use your newfound knowledge and experience to pursue your next adventure with confidence. This card can also indicate travel, particularly to foreign lands.`,
      },
      reverse: {
        keyword: ["Seeking personal closure", "short-cuts", "delays"],
        meaning: `The reversed World card suggests that you may be seeking personal closure or resolution. You feel like something is missing or incomplete, and you are searching for a way to tie up loose ends. This card can also indicate a tendency to take shortcuts or the need to slow down and take your time to avoid delays or obstacles. You may feel like you are spinning your wheels and not making progress, but remember that true completion takes time and effort.`,
      },
      description: `The World card shows a naked woman wrapped in a purple cloth, dancing inside a large laurel wreath. She looks behind her to the past, while her body moves forward to the future. In her hands are two wands or batons, like the one The Magician holds. It is a symbol that what was manifested with The Magician has now come to completion with The World. The wreath is circular, symbolizing a continual cycle of successful completion and new beginnings because, as the woman steps through the wreath, she is completing one phase but beginning another one almost straight away.

    Around the wreath are four figures (a lion, bull, cherub and eagle), similar to those in the Wheel of Fortune. Both The World and the Wheel of Fortune speak to the cyclical nature of your life and your progression through its cycles. The four figures represent the four fixed signs of the Zodiac—Leo, Taurus, Aquarius, and Scorpio. They are symbolic of the four elements, the four suits of Tarot, four compass points, four seasons, and the four corners of the Universe. They are here to guide you from one phase to the next, bringing balance and harmony to your journey.`,
    },
    {
      id: 22,
      name: "Ace of Wands",
      isReverse: false,
      image: require("assets/images/cards/22.jpg"),
      upright: {
        keyword: ["New beginnings", "inspiration", "energy", "creativity"],
        meaning: `The Ace of Wands represents the spark of inspiration that ignites the flame of creativity within you. This card is a sign of new beginnings, energy, enthusiasm, and passion. It suggests that you have the power and strength to make things happen and manifest your desires. It's a time to take action and seize opportunities that come your way. Your intuition is guiding you, and you are filled with confidence and determination.`,
      },
      reverse: {
        keyword: ["Delays", "lack of direction", "lack of energy"],
        meaning: `The reversed Ace of Wands suggests that you may be feeling stuck, uninspired, or lacking in motivation. You may be unsure of what direction to take or feel overwhelmed by the options available to you. It's important to take a step back and reconnect with your passions and inner fire. Look for new sources of inspiration and be open to exploring new ideas and opportunities. Trust that the creative spark will return in due time.`,
      },
      description: `The Ace of Wands shows a hand holding a wand or staff, which is sprouting new leaves. This wand represents the primal energy of creation, the power of the Universe, and the potential for growth and expansion. The leaves on the wand represent the fiery energy of passion and creativity that fuels your dreams and goals. The mountains in the background symbolize the challenges you may face, but also the strength and stability that comes from overcoming them.`,
    },
    {
      id: 23,
      name: "Two of Wands",
      isReverse: false,
      image: require("assets/images/cards/23.jpg"),
      upright: {
        keyword: ["Planning", "preparation", "progress", "decisions"],
        meaning: `The Two of Wands is a card of planning and progress. You have taken the spark of inspiration from the Ace of Wands and have decided to turn it into something more concrete. You are now thinking about the steps that you need to take to turn your vision into a reality. This card suggests that you are in the planning phase of a new project or idea, and you are thinking about the best way to proceed. You are full of potential and have many options available to you.`,
      },
      reverse: {
        keyword: ["Lack of planning", "bad choices", "fear of the unknown"],
        meaning: `When the Two of Wands is reversed, it can suggest that you are not making progress in your plans. You may be feeling stuck or blocked and are unsure of how to move forward. Alternatively, you may be rushing into things without thinking them through properly, which could lead to bad decisions. This card suggests that you need to slow down and take the time to plan things out properly before taking action.`,
      },
      description: `The Two of Wands shows a man holding a globe and standing on a rooftop, looking out over the horizon. He is holding a wand in his other hand, and a second wand is planted firmly in the ground next to him. The globe represents the potential of your idea or project, and the wand in the man’s hand symbolizes his personal power and ability to make it happen. The second wand in the ground represents the solid foundation that you have built so far, and the potential for growth and expansion. The man’s stance suggests that he is ready and willing to take action to move his plans forward.`,
    },
    {
      id: 24,
      name: "Three of Wands",
      isReverse: false,
      image: require("assets/images/cards/24.jpg"),
      upright: {
        keyword: ["Expansion", "progress", "growth", "opportunity"],
        meaning: `The Three of Wands represents the initial stages of exploring new horizons and expanding your worldview. You have left the safety and security of your comfort zone and are now exploring new opportunities, environments, and experiences that will help you grow and develop. You are full of potential and are excited about the possibilities that lie ahead.`,
      },
      reverse: {
        keyword: ["Missed opportunities", "lack of growth", "setbacks"],
        meaning: `The Three of Wands reversed suggests that you may be limiting your potential by holding onto self-limiting beliefs or by failing to see the big picture. You may be focusing too much on the small details and losing sight of the larger goal or failing to see the opportunities that lie ahead. It's time to take a step back, re-evaluate your situation, and look at the bigger picture to see where you can grow and expand your horizons.`,
      },
      description: `The Three of Wands shows a man standing on a cliff, looking out over the sea. He holds three wands, symbolizing the progress and growth that comes from taking action. The man has left the safety of the castle (as seen in the Two of Wands) and has ventured out into the unknown.

    The ships in the distance represent the opportunities that await him. The man is in a position of power and has the ability to expand his horizons and achieve great things.`,
    },
    {
      id: 25,
      name: "Four of Wands",
      isReverse: false,
      image: require("assets/images/cards/25.jpg"),
      upright: {
        keyword: ["Celebration", "harmony", "homecoming"],
        meaning:
          "The Four of Wands signifies a time of celebration, harmony, and homecoming. It represents the successful completion of a project or milestone, and the satisfaction and happiness that comes with it. This card encourages you to celebrate your achievements and enjoy the company of loved ones.",
      },
      reverse: {
        keyword: ["Disruption", "misalignment", "disconnection"],
        meaning:
          "When reversed, the Four of Wands can indicate a disruption in your plans or a lack of harmony in your relationships. You may feel disconnected from loved ones or out of sync with the people around you. It is important to address any conflicts or misalignments and work towards finding common ground.",
      },
      description: `The Four of Wands depicts a group of people celebrating under a canopy of flowers and ribbons. The scene is joyous and harmonious, indicating a time of celebration and homecoming. The card represents the successful completion of a project and the satisfaction that comes with it. It also signifies the importance of harmony and connection with others.`,
    },
    {
      id: 26,
      name: "Five of Wands",
      isReverse: false,
      image: require("assets/images/cards/26.jpg"),
      upright: {
        keyword: ["Competition", "challenges", "conflict"],
        meaning: `The Five of Wands typically represents conflict, competition, and struggle. It may indicate that there are many different forces at work, and that these forces are competing with one another. However, this card can also indicate that this conflict is not necessarily a bad thing. It can be an opportunity for growth and development, as long as it is approached with the right mindset.`,
      },
      reverse: {
        keyword: [
          "Avoidance of conflict",
          "inner conflict",
          "personal struggle",
        ],
        meaning: `When reversed, the Five of Wands suggests that conflict and competition are coming to an end, and that there may be an opportunity for resolution and agreement. This can be a time for healing and bringing people together, as long as everyone is willing to let go of their differences and work towards a common goal.`,
      },
      description: `The Five of Wands shows five young men, each holding a wand, and energetically attacking each other, as if in a playful battle. The background is a sunny, bright sky, representing the dawn of a new day and the beginning of hope. The men are all wearing different-colored clothes, representing different passions, ideas, and motivations. They are all eager to fight for what they believe in, but they lack direction and coordination. The message of the Five of Wands is that sometimes you need to work together with others, even if you have different ideas, to achieve a common goal.`,
    },
    {
      id: 27,
      name: "Six of Wands",
      isReverse: false,
      image: require("assets/images/cards/27.jpg"),
      upright: {
        keyword: ["Victory", "public recognition", "progress"],
        meaning: `The Six of Wands is a card of victory, recognition, and achievement. It represents a time of triumph after a period of hard work and struggle. You may be receiving recognition for your accomplishments, or experiencing a sense of pride and satisfaction in your achievements. This card encourages you to continue to work hard and to believe in yourself, as your efforts will be rewarded.`,
      },
      reverse: {
        keyword: ["Egotism", "setback", "lack of support"],
        meaning: `When the Six of Wands appears reversed, it can indicate self-doubt and feelings of disappointment. You may be questioning your abilities or experiencing setbacks in your goals. This card reminds you to stay focused and believe in yourself, even when things get tough. With perseverance and determination, you can overcome any obstacle and achieve your goals.`,
      },
      description: `The Six of Wands depicts a man riding a horse, carrying a staff with a laurel wreath at the top, a symbol of victory. He is being celebrated by a crowd of people, who cheer him on and hold their own wands in the air. The card represents a sense of accomplishment and recognition, and encourages you to celebrate your own victories and accomplishments.`,
    },
    {
      id: 28,
      name: "Seven of Wands",
      isReverse: false,
      image: require("assets/images/cards/28.jpg"),
      upright: {
        keyword: ["Challenge", "competition", "protection"],
        meaning: `The Seven of Wands depicts a person standing on a hill, holding a wand and fighting off six other wands that are coming at them. The card represents a time of challenge and competition, where one must fight to maintain their position or defend themselves against rivals. The card also signifies the importance of perseverance in the face of adversity.`,
      },
      reverse: {
        keyword: ["Giving up", "exhaustion", "overwhelm"],
        meaning: `Reversed, the Seven of Wands can indicate a lack of confidence or willingness to fight for one's beliefs or position. It can also suggest the need to choose battles wisely and not waste energy on unwinnable fights.`,
      },
      description: `The Seven of Wands shows a young man standing on a hill, holding a wand in his hand, and defending himself against six other wands that are attacking him from below. The man is wearing a red shirt, which represents his strength and courage. He is standing tall and strong, despite the odds against him. The message of the Seven of Wands is that you may face challenges and competition from others, but you have the strength and courage to protect yourself and overcome them. Don't give up, even if you feel overwhelmed or exhausted.`,
    },
    {
      id: 29,
      name: "Eight of Wands",
      isReverse: false,
      image: require("assets/images/cards/29.jpg"),
      upright: {
        keyword: ["Rapid action", "movement", "quick decisions", "change"],
        meaning: `The Eight of Wands indicates swift action and movement. It suggests that you may be in a situation where things are moving quickly and you need to act fast. It can also represent a sudden change or a burst of energy. This card encourages you to take advantage of the momentum and make quick decisions to move forward.`,
      },
      reverse: {
        keyword: ["Delays", "frustration", "procrastination"],
        meaning: `The Eight of Wands reversed suggests delays, frustration, and procrastination. You may be feeling stuck or unable to make progress in a situation that requires swift action. It can also indicate miscommunication or obstacles that are preventing you from moving forward. This card encourages you to take a step back and assess the situation to find a way to overcome the obstacles.`,
      },
      description: `The Eight of Wands depicts eight wands flying through the air, indicating swift movement and action. The background is clear, suggesting that there are no obstacles in the way of progress. The card represents a time of swift action and change, encouraging you to make quick decisions and take advantage of opportunities that come your way. It also reminds you to stay focused and maintain momentum to reach your goals.`,
    },
    {
      id: 30,
      name: "Nine of Wands",
      isReverse: false,
      image: require("assets/images/cards/30.jpg"),
      upright: {
        keyword: ["Resilience", "courage", "persistence", "test of faith"],
        meaning: `The Nine of Wands depicts a figure standing alone, holding a wand and looking exhausted, but determined to keep going. The card represents resilience and perseverance in the face of challenges, and the courage to make a last stand if necessary. It can also indicate the need for rest and recovery after a long struggle.`,
      },
      reverse: {
        keyword: ["Exhaustion", "fatigue", "overwhelm"],
        meaning: `Reversed, the Nine of Wands may indicate exhaustion, burnout, or the feeling of being overwhelmed by the challenges ahead. It can also indicate a loss of confidence or the decision to give up on a project or goal.`,
      },
      description: `The Nine of Wands represents the resilience and perseverance needed to overcome obstacles and challenges. It reminds us that even when we feel exhausted and overwhelmed, we have the strength and determination to keep going. However, it also warns us to take care of ourselves and to rest when necessary, so that we don't become completely burnt out or lose sight of our goals.`,
    },
    {
      id: 31,
      name: "Ten of Wands",
      isReverse: false,
      image: require("assets/images/cards/31.jpg"),
      upright: {
        keyword: ["Burden", "responsibility", "hard work", "completion"],
        meaning: `The Ten of Wands indicates a heavy burden or responsibility that the seeker is carrying. It can signify that they are taking on too much, and may need to delegate or let go of some tasks to avoid burnout. Despite the challenges, the card also indicates that the seeker is capable of handling the workload and can succeed with perseverance.`,
      },
      reverse: {
        keyword: ["Release", "relief", "lightening the load"],
        meaning: `Reversed, the Ten of Wands can indicate that the seeker has finally let go of a heavy burden and is experiencing a sense of relief. It may also indicate that they have realized that they cannot handle everything on their own and have asked for help, resulting in a lighter workload and a sense of release.`,
      },
      description: `The Ten of Wands depicts a figure carrying a heavy load of wands, representing the burdens and responsibilities that they are carrying. The figure is hunched over, indicating the weight of the load, but they continue to move forward. The card represents the challenges and difficulties that come with hard work and the need for perseverance and determination to overcome them.`,
    },
    {
      id: 32,
      name: "Page of Wands",
      isReverse: false,
      image: require("assets/images/cards/32.jpg"),
      upright: {
        keyword: ["Inspiration", "exploration", "free spirit", "adventure"],
        meaning: `The Page of Wands signifies the beginning of a creative journey or a new phase in one's life that holds great potential. It represents inspiration, enthusiasm, and the courage to pursue one's dreams. This card encourages taking risks and exploring new opportunities. It suggests that you may be on the verge of a breakthrough or a new discovery that could change the course of your life.`,
      },
      reverse: {
        keyword: ["Setbacks", "delays", "frustration"],
        meaning: `When the Page of Wands is reversed, it may indicate a lack of direction or purpose. You may be feeling uncertain about your path or struggling to find the inspiration and motivation to pursue your goals. This card suggests delays or missed opportunities, and the need to re-evaluate your plans and priorities. It may be time to seek guidance from others or take a step back to gain a new perspective.`,
      },
      description: `The Page of Wands is depicted as a young person holding a wand with both hands, looking off into the distance as if imagining the possibilities ahead. The desert landscape in the background suggests the vast potential of the creative realm. The salamander at the bottom of the card symbolizes transformation and the power of fire, which represents the passion and enthusiasm needed to pursue one's dreams.`,
    },
    {
      id: 33,
      name: "Knight of Wands",
      isReverse: false,
      image: require("assets/images/cards/33.jpg"),
      upright: {
        keyword: ["Action", "adventure", "fearlessness", "courage"],
        meaning: `The Knight of Wands is a card of action, adventure, and fearlessness. He is always on the move, seeking out new experiences and opportunities. This card can indicate a time of great energy and enthusiasm, where you feel confident and capable of taking on anything that comes your way. It encourages you to embrace your passions and pursue your goals with determination and vigor.`,
      },
      reverse: {
        keyword: ["Haste", "scattered energy", "stubbornness"],
        meaning: `The reversed Knight of Wands can indicate a tendency towards haste, recklessness, and impulsiveness. You may be acting without thinking things through, or taking unnecessary risks that could lead to negative consequences. It is important to slow down, think things through, and make thoughtful decisions during this time. It may also be a time to reevaluate your goals and passions, and make sure that you are pursuing what truly matters to you.`,
      },
      description: `The Knight of Wands is depicted as a young, energetic warrior, riding a horse and holding a wand. He is dressed in armor, and his horse is also decorated with colorful armor. The Knight is surrounded by a desert landscape, indicating a sense of adventure and exploration. The wand he holds symbolizes his passion and creative energy, which he is ready to channel into action.`,
    },
    {
      id: 34,
      name: "Queen of Wands",
      isReverse: false,
      image: require("assets/images/cards/34.jpg"),
      upright: {
        keyword: ["Confidence", "determination", "courage", "independence"],
        meaning: `The Queen of Wands represents a strong, confident, and creative woman who is not afraid to take risks and pursue her passions. She has a magnetic personality and attracts others with her charisma and leadership qualities. When this card appears upright, it may suggest that you should embrace your inner Queen of Wands and tap into your own courage, confidence, and creativity to achieve your goals.`,
      },
      reverse: {
        keyword: ["Selfishness", "Jealousy", "Insecurity"],
        meaning: `In reverse, the Queen of Wands may indicate that you are allowing your insecurities and jealousy to cloud your judgment and prevent you from being your best self. You may be focused too much on your own needs and not taking the needs of others into consideration. It's important to address these negative traits and work on building your confidence and generosity towards others.`,
      },
      description: `The Queen of Wands is a strong and confident woman who is passionate about life. She is not afraid to go after what she wants and can be quite forceful when she needs to be. Her wand is a symbol of her power and her creativity.
  
    The Queen of Wands can represent a time in your life when you need to be strong and confident. She can also represent a person, most likely a woman, who is very confident and independent, and who has a lot of creative energy.`,
    },
    {
      id: 35,
      name: "King of Wands",
      isReverse: false,
      image: require("assets/images/cards/35.jpg"),
      upright: {
        keyword: ["Big picture", "leader", "entrepreneur", "bold"],
        meaning: `The King of Wands is a natural born leader with a clear vision of the big picture. He is confident and charismatic, inspiring those around him to follow his lead. This card represents a time of taking charge, asserting authority, and using one's creativity and passion to achieve great things.`,
      },
      reverse: {
        keyword: ["Impulsiveness", "egotistical", "overbearing"],
        meaning: `When reversed, the King of Wands can indicate impulsiveness, recklessness, or stubbornness. The negative aspects of this card suggest a need to be more open to other perspectives and to listen to the advice of others rather than charging ahead without a plan.`,
      },
      description: `The King of Wands sits on his throne, holding his wand with confidence and authority. The salamanders on his robe represent his fiery nature, and the lions on the throne signify his strength and power. The King of Wands is a visionary leader who inspires others to achieve great things with his creative ideas and confident demeanor.`,
    },
    {
      id: 36,
      name: "Ace of Cups",
      isReverse: false,
      image: require("assets/images/cards/36.jpg"),
      upright: {
        keyword: ["New emotions", "creativity", "spirituality", "intuition"],
        meaning: `The Ace of Cups is a card of new beginnings, particularly in matters of the heart and emotions. It represents emotional fulfillment, joy, and a deep connection with one's intuition. This is a time to follow your heart and trust your instincts. The Ace of Cups can also signify the start of a new relationship, the birth of a child, or other happy events.`,
      },
      reverse: {
        keyword: ["Blocked creativity", "emotional instability", "emptiness"],
        meaning: `When the Ace of Cups appears reversed, it may indicate a blockage of creativity or emotional expression. You may feel empty or disconnected, lacking the emotional fulfillment that you desire. It's important to address any emotional issues and work on opening yourself up to love and joy.`,
      },
      description: `The Ace of Cups is a card of new beginnings and emotional fulfillment. In the Rider-Waite deck, a hand holding a cup overflowing with water appears from a cloud, symbolizing the overflowing of emotions and love. The five streams of water flowing into the cup represent the five senses and the emotional and intuitive aspects of the self. The Ace of Cups reminds us to open ourselves up to the love and joy that life has to offer and to trust our intuition and emotions.`,
    },
    {
      id: 37,
      name: "Two of Cups",
      isReverse: false,
      image: require("assets/images/cards/37.jpg"),
      upright: {
        keyword: [
          "Unified love",
          "partnership",
          "harmony",
          "mutual attraction",
        ],
        meaning: `The Two of Cups represents the beginning of a new partnership or relationship, built on a strong emotional connection and mutual understanding. It can indicate a deepening of an existing bond or the potential for a new romantic relationship. The card suggests that both parties are willing to make a commitment to each other, and there is a sense of balance and equality in the relationship.`,
      },
      reverse: {
        keyword: ["Imbalanced relationship", "breakup", "disharmony"],
        meaning: `In reverse, the Two of Cups may indicate an imbalance in a relationship, with one party giving more than the other. It can also suggest the breakdown of a partnership or a lack of emotional connection. Disharmony and disagreements may arise, and it is important to communicate openly and honestly to resolve any issues.`,
      },
      description: `The Two of Cups shows two figures facing each other, holding cups and exchanging their contents. The card represents the joining of two people in a partnership or relationship. The wings of the caduceus, a symbol of Hermes, can be seen in the background, representing balance and harmony.`,
    },
    {
      id: 38,
      name: "Three of Cups",
      isReverse: false,
      image: require("assets/images/cards/38.jpg"),
      upright: {
        keyword: ["Celebration", "friendship", "creativity", "collaboration"],
        meaning: `The Three of Cups represents celebration, friendship, and community. It often appears when you are surrounded by those you love and care for, celebrating an event or achievement. This card also signifies the importance of connection with others and the joy that comes from sharing experiences.`,
      },
      reverse: {
        keyword: ["Independence", "overindulgence", "excess"],
        meaning: `In reverse, the Three of Cups can indicate a lack of connection or exclusion from a group or community. It may suggest that you are feeling lonely or left out. Alternatively, it could indicate that your social life is too active and that you need to focus on balance and moderation.`,
      },
      description: `The Three of Cups depicts three women holding cups and dancing in a circle. They are surrounded by fruit, flowers, and a general sense of abundance. This card is often associated with weddings, parties, and other social events.`,
    },
    {
      id: 39,
      name: "Four of Cups",
      isReverse: false,
      image: require("assets/images/cards/39.jpg"),
      upright: {
        keyword: ["Meditation", "contemplation", "apathy", "discontent"],
        meaning: `The Four of Cups shows a figure sitting under a tree with three cups in front of them, while a hand holding out a fourth cup appears from a cloud. The card suggests a state of apathy or disconnectedness, where the person is too focused on their own thoughts and emotions to see the opportunities and blessings that are being offered to them. It advises taking a step back to contemplate one's situation and to open oneself up to new experiences.`,
      },
      reverse: {
        keyword: ["New perspectives", "acceptance", "openness"],
        meaning: `In reverse, the Four of Cups indicates a shift away from apathy and towards acceptance and gratitude. The person may have gained a new perspective on their situation, or have come to appreciate what they already have. The card encourages embracing new opportunities and being open to positive change.`,
      },
      description: `The Four of Cups represents a time of introspection and contemplation. It suggests the need to step back from the distractions of the world and focus on one's own thoughts and feelings. However, the card also warns against becoming too inwardly focused and missing out on the blessings that life has to offer. It encourages finding a balance between contemplation and engagement with the world around us.`,
    },
    {
      id: 40,
      name: "Five of Cups",
      isReverse: false,
      image: require("assets/images/cards/40.jpg"),
      upright: {
        keyword: ["Loss", "grief", "disappointment", "moving on"],
        meaning: `The Five of Cups suggests that you may be experiencing feelings of loss, grief, or disappointment. You may be dwelling on what you have lost, rather than what you still have. It's important to acknowledge and process these feelings, but don't forget to also focus on what remains and what you can still gain.`,
      },
      reverse: {
        keyword: ["Acceptance", "forgiveness", "finding peace"],
        meaning: `In reverse, the Five of Cups suggests that you are beginning to accept your losses and move on. You may be finding peace in the situation and focusing on what remains. It's important to allow yourself to grieve and process your feelings, but don't let them hold you back from moving forward.`,
      },
      description: `The Five of Cups shows a figure standing before three spilled cups, mourning their loss. Two cups remain standing behind them, but they are not noticed. The card represents feelings of loss, grief, and disappointment. It can indicate a time of mourning, regret, or sorrow. It's important to acknowledge these feelings and work through them, but don't forget to also focus on what remains and what you can still gain.`,
    },
    {
      id: 41,
      name: "Six of Cups",
      isReverse: false,
      image: require("assets/images/cards/41.jpg"),
      upright: {
        keyword: [
          "Nostalgia",
          "innocence",
          "past connections",
          "happy memories",
        ],
        meaning: `The Six of Cups is a card that speaks to innocence and nostalgia. It depicts two children exchanging flowers, symbolizing the giving and receiving of gifts and the innocence of childhood. The card represents memories and the longing for simpler times. It may indicate a time of reflection or the need to reconnect with your inner child.`,
      },
      reverse: {
        keyword: ["Moving on", "leaving the past behind", "acceptance"],
        meaning: `Reversed, the Six of Cups can indicate a refusal to move on from the past or an unrealistic view of the world. It may suggest a need to let go of old ways of thinking or patterns of behavior in order to move forward. Be mindful of being overly naive or idealistic in your approach to life.`,
      },
      description: `The Six of Cups is a card of innocence and nostalgia, representing memories and the longing for simpler times. It may indicate a time of reflection or the need to reconnect with your inner child. The card reminds us to cherish the happy moments of the past while still moving forward and embracing the present.`,
    },
    {
      id: 42,
      name: "Seven of Cups",
      isReverse: false,
      image: require("assets/images/cards/42.jpg"),
      upright: {
        keyword: ["Opportunities", "choices", "imagination", "fantasy"],
        meaning: `The Seven of Cups represents a multitude of options and choices. It may indicate that the querent is faced with many different possibilities and is struggling to choose the right path. The card also suggests a rich imagination and the potential for creativity. However, it warns of the danger of being tempted by unrealistic or impractical options.`,
      },
      reverse: {
        keyword: ["Overwhelm", "confusion", "dissatisfaction"],
        meaning: `In reverse, the Seven of Cups indicates that the querent may be overwhelmed by choices or struggling to make a decision. They may also be prone to indulging in unrealistic fantasies or being tempted by illusions. The card suggests the need for clarity and practicality in decision-making.`,
      },
      description: `The Seven of Cups depicts a figure standing before a group of seven cups, each containing a different object or image. Some of the cups hold desirable objects, such as a crown or a beautiful woman, while others hold more negative images, such as a snake or a skull. The card represents the need to make choices, but also the danger of being misled by temptation or illusion.`,
    },
    {
      id: 43,
      name: "Eight of Cups",
      isReverse: false,
      image: require("assets/images/cards/43.jpg"),
      upright: {
        keyword: [
          "Abandonment",
          "leaving behind",
          "moving on",
          "disillusionment",
        ],
        meaning: `The Eight of Cups indicates the need to walk away from something that no longer serves your highest good. You may be feeling disillusioned or disappointed with a situation or relationship that you had hoped would bring you fulfillment. It's time to let go and move on, even though it may be difficult. Trust that there are better things in store for you.`,
      },
      reverse: {
        keyword: ["Hope", "new beginnings", "fresh perspective"],
        meaning: `When the Eight of Cups appears reversed, it can indicate a fear of change or a reluctance to let go of something that is no longer serving you. You may be holding onto a situation or relationship out of habit or comfort, even though it's not bringing you happiness. This can lead to stagnation and a lack of growth. It's important to be honest with yourself about what you truly want and take steps towards making positive changes.`,
      },
      description: `The Eight of Cups shows a figure walking away from a stack of cups, representing the emotional baggage they are leaving behind. The moon in the sky suggests that this is a journey of the soul. While it can be difficult to let go of the past, the figure is moving towards a more fulfilling future.`,
    },
    {
      id: 44,
      name: "Nine of Cups",
      isReverse: false,
      image: require("assets/images/cards/44.jpg"),
      upright: {
        keyword: ["Satisfaction", "gratitude", "indulgence", "pleasure"],
        meaning: `The Nine of Cups is often called the "wish card" as it represents a time of great satisfaction and contentment. In the traditional Rider-Waite-Smith imagery, the card shows a man sitting in front of nine cups, with his arms crossed and a smile on his face. The cups behind him represent his accomplishments, and he appears to be basking in the glow of his own success.`,
      },
      reverse: {
        keyword: ["Inner happiness", "fulfillment", "shallow satisfaction"],
        meaning: `When the Nine of Cups appears in reverse, it may indicate a lack of inner happiness or fulfillment. You may be struggling with finding satisfaction in your accomplishments or feeling unfulfilled in your relationships. Be cautious of seeking shallow satisfaction or indulging in unhealthy habits as a means of filling this void. Instead, take time to reflect on your values and goals, and consider making changes that align with your true desires and passions.`,
      },
      description: `The Nine of Cups is often associated with the phrase "happiness is within reach." It suggests that we have achieved a state of contentment and are able to enjoy the pleasures of life. This card reminds us to be grateful for what we have, but to also remain humble and continue to strive for personal growth and development.`,
    },
    {
      id: 45,
      name: "Ten of Cups",
      isReverse: false,
      image: require("assets/images/cards/45.jpg"),
      upright: {
        keyword: ["Happiness", "harmony", "fulfillment", "joy"],
        meaning: `The Ten of Cups is a card that represents ultimate happiness, harmony, and contentment. It often depicts a happy family or group of people, with a rainbow overhead symbolizing the fulfillment of all their hopes and dreams. This card suggests that everything is coming together in the best possible way, and you are experiencing a deep sense of emotional satisfaction and fulfillment. Your relationships with loved ones are strong and you feel a deep sense of love and belonging.`,
      },
      reverse: {
        keyword: ["Disconnection", "misalignment", "unrealistic expectations"],
        meaning: `In the reversed position, the Ten of Cups suggests that there may be tension or conflict in your relationships. Perhaps there are unrealistic expectations or unmet needs that are causing disharmony and disrupting the happiness you had once felt. It may be a time to reassess your priorities and make sure you are communicating your needs clearly. If there is conflict, it is important to work together to resolve it and restore harmony in your relationships.`,
      },
      description: `The Ten of Cups is often seen as one of the most positive cards in the deck, as it represents a sense of deep contentment and happiness in all areas of life. It is a reminder to cherish the people you love and to focus on the good things in life. However, it is also important to be realistic about your expectations and work together to resolve any conflicts that may arise. When this card appears in a reading, it is a sign of peace, harmony, and a strong sense of community.`,
    },
    {
      id: 46,
      name: "Page of Cups",
      isReverse: false,
      image: require("assets/images/cards/46.jpg"),
      upright: {
        keyword: ["Creativity", "imagination", "empathy", "intuition"],
        meaning: `The Page of Cups is a card of youthful energy and creativity. It often indicates a new idea or project that is just starting to take shape. This card can also represent a young person who is sensitive, empathetic, and in touch with their emotions.`,
      },
      reverse: {
        keyword: [
          "Blocked creativity",
          "emotional immaturity",
          "lack of sensitivity",
        ],
        meaning: `When reversed, the Page of Cups can indicate emotional immaturity or insecurity. This card may suggest that you are not being honest with yourself or others about your true feelings. You may be manipulating others or allowing yourself to be manipulated by someone else.`,
      },
      description: `The Page of Cups is a member of the Court Cards in the suit of Cups in the Tarot. He is depicted as a young man holding a cup or a chalice, often with a fish popping out of it. The fish represents the unconscious mind and the depth of emotions that the Page is in touch with.

    The Page of Cups is a reminder to embrace your inner child and tap into your creativity and emotions. This card encourages you to follow your heart and pursue your passions, even if they seem unconventional or impractical. The Page of Cups represents the youthful energy of new beginnings and the potential for growth and change.`,
    },
    {
      id: 47,
      name: "Knight of Cups",
      isReverse: false,
      image: require("assets/images/cards/47.jpg"),
      upright: {
        keyword: ["Romance", "charm", "grace", "emotion"],
        meaning: `The Knight of Cups represents a charming, romantic, and creative individual who is in touch with their emotions. This card often suggests the pursuit of a new relationship or the deepening of an existing one. The Knight of Cups is driven by his emotions and is not afraid to take risks to follow his heart. He is a dreamer who is always in search of beauty and inspiration.`,
      },
      reverse: {
        keyword: ["Moodiness", "overindulgence", "manipulation"],
        meaning: `When the Knight of Cups appears in reverse, it may suggest that the individual is being driven too much by their emotions and may be prone to mood swings and unrealistic expectations. They may be using their emotions to manipulate others or to avoid dealing with reality. This card can also indicate the need to take a more practical approach to matters of the heart.`,
      },
      description: `The Knight of Cups is a card that embodies the qualities of a romantic and creative individual. This knight is in touch with his emotions and uses his intuition to navigate through life. He is often seen as a dreamer who is always in search of beauty and inspiration. The Knight of Cups represents the pursuit of a new relationship or the deepening of an existing one. This card encourages us to follow our hearts and take risks in matters of love and creativity. However, we should also be aware of the potential for emotional manipulation and the need to maintain a practical approach to life.`,
    },
    {
      id: 48,
      name: "Queen of Cups",
      isReverse: false,
      image: require("assets/images/cards/48.jpg"),
      upright: {
        keyword: ["Nurturing", "empathy", "compassion", "intuition"],
        meaning: `The Queen of Cups embodies emotional intelligence, empathy, and sensitivity. She trusts her intuition and inner voice, and is able to connect with others on a deep emotional level. This card suggests a time to be receptive to your feelings and those of others, and to nurture your emotional wellbeing. You may find yourself being more compassionate and nurturing towards others, and feeling a sense of emotional fulfillment in doing so.`,
      },
      reverse: {
        keyword: ["Martyrdom", "codependency", "emotional instability"],
        meaning: `When reversed, the Queen of Cups can indicate emotional instability, moodiness, and a lack of emotional boundaries. You may find yourself overwhelmed by your emotions, or having difficulty expressing them in a healthy way. This card is a reminder to take care of yourself emotionally, set healthy boundaries, and seek support if needed.`,
      },
      description: `In the Rider-Waite-Smith tradition, the Queen of Cups is depicted as a serene woman holding a cup adorned with angelic figures. She sits by the sea, representing her connection to the subconscious and emotional depths. The Queen of Cups encourages us to trust our intuition and emotions, and to honor our emotional needs with compassion and kindness.`,
    },
    {
      id: 49,
      name: "King of Cups",
      isReverse: false,
      image: require("assets/images/cards/49.jpg"),
      upright: {
        keyword: ["Compassion", "empathy", "diplomacy", "creativity"],
        meaning: `The King of Cups represents emotional maturity, balance, and compassion. He is a master of his emotions and is able to navigate through difficult situations with calmness and grace. He uses his intuition and empathy to understand the emotions of others and is able to offer support and guidance when needed.`,
      },
      reverse: {
        keyword: ["Emotional manipulation", "moodiness", "manipulation"],
        meaning: `When reversed, the King of Cups can indicate emotional manipulation, moodiness, and a lack of emotional control. This can manifest as using emotions to control others or being unable to control one's own emotions, leading to erratic behavior and mood swings.`,
      },
      description: `The King of Cups is a symbol of emotional balance and maturity. He represents someone who is able to navigate through difficult situations with calmness and grace, using his intuition and empathy to understand the emotions of others. He values harmony and peace in all relationships and is able to find solutions that benefit everyone involved. The King of Cups reminds us to remain emotionally balanced and approach situations with compassion and understanding.`,
    },
    {
      id: 50,
      name: "Ace of Swords",
      isReverse: false,
      image: require("assets/images/cards/50.jpg"),
      upright: {
        keyword: ["Clarity", "power", "truth", "mental force"],
        meaning: `The Ace of Swords is a card of clarity, focus, and breakthroughs. It indicates a new level of understanding or awareness that will allow you to cut through confusion and mental fog. This card suggests a time of intellectual power and sharpness of mind, giving you the ability to see through illusions and find solutions to problems.`,
      },
      reverse: {
        keyword: ["Confusion", "chaos", "disorder", "falsehood"],
        meaning: `When reversed, the Ace of Swords suggests that you may be feeling confused or uncertain. You may be having trouble making decisions or finding clarity in a particular situation. It can also indicate a lack of mental discipline or the inability to see things clearly, which can lead to mistakes or misjudgments.`,
      },
      description: `The Ace of Swords is a symbol of mental clarity and intellectual power. The sword represents the mind and the power of thought, while the crown represents the clarity and focus that comes with a new level of understanding. The Ace of Swords is a card of breakthroughs and new beginnings, indicating that you have the mental strength and power to cut through confusion and find a path forward. This card encourages you to use your intellect and mental faculties to solve problems and make decisions with confidence and clarity.`,
    },
    {
      id: 51,
      name: "Two of Swords",
      isReverse: false,
      image: require("assets/images/cards/51.jpg"),
      upright: {
        keyword: ["Stalemate", "difficult decisions", "indecision", "truce"],
        meaning: `The Two of Swords often appears when a difficult decision must be made, but the querent feels stuck or uncertain. The card shows a woman blindfolded, holding two crossed swords in front of her. This suggests that she may be hesitant to make a move for fear of making the wrong choice. The water and rocks in the background suggest that emotions are at play in this situation, and that the decision may have significant consequences.`,
      },
      reverse: {
        keyword: [
          "Indecision",
          "confusion",
          "information overload",
          "disruption",
        ],
        meaning: `When the Two of Swords appears reversed, it may suggest that the querent is avoiding making a difficult decision or is resisting change. They may be struggling with feelings of fear or uncertainty, and may be hesitant to make a move for fear of making the wrong choice.`,
      },
      description: `The Two of Swords is a card of difficult choices and emotional conflict. In the traditional Rider-Waite-Smith imagery, the card shows a woman seated with her back to the water, holding two crossed swords in front of her. Her posture suggests that she may be blindfolded or otherwise unable to see the situation clearly. The swords represent the difficult decision that must be made, and the water and rocks in the background suggest that emotions are at play in this situation.

    This card can indicate a stalemate or impasse, where neither option seems like the right one. The querent may feel stuck or uncertain, and may need to take a step back to gain clarity and perspective. Ultimately, the Two of Swords reminds us that sometimes difficult choices must be made, and that it is important to approach them with clarity, focus, and honesty.`,
    },
    {
      id: 52,
      name: "Three of Swords",
      isReverse: false,
      image: require("assets/images/cards/52.jpg"),
      upright: {
        keyword: ["Heartbreak", "sadness", "betrayal", "rejection"],
        meaning: `The Three of Swords in the upright position signifies emotional pain, heartbreak, and sorrow. It suggests that you may be experiencing the end of a relationship, betrayal, or rejection. This card reminds you to allow yourself to grieve and process your emotions, rather than repressing or denying them. It can also indicate the need for self-reflection and introspection to gain clarity on the situation and learn from the experience.`,
      },
      reverse: {
        keyword: ["Recovery", "forgiveness", "moving on"],
        meaning: `In the reverse position, the Three of Swords suggests that you are on the path to recovery and healing from emotional pain. You may be learning to forgive yourself or others and moving on from a difficult situation. It can indicate that you are gaining a new perspective and finding inner peace. However, this card also warns against rushing the healing process and ignoring any unresolved emotions or issues.`,
      },
      description: `The Three of Swords depicts a heart pierced by three swords, against a stormy background. This card represents heartbreak, sadness, betrayal, and rejection. It can indicate a painful experience of loss or separation, either in a relationship or another area of your life. This card suggests that you may be feeling hurt, alone, or disillusioned.
    `,
    },
    {
      id: 53,
      name: "Four of Swords",
      isReverse: false,
      image: require("assets/images/cards/53.jpg"),
      upright: {
        keyword: ["Rest", "recuperation", "solitude", "contemplation"],
        meaning: `The Four of Swords often appears when you need to take a break from the hustle and bustle of daily life. This card suggests that you may be feeling mentally or emotionally exhausted and need time to recharge your batteries. It can also indicate a need for solitude, reflection, and contemplation. Use this time to focus on self-care, meditation, or other practices that help you restore your energy and find inner peace.`,
      },
      reverse: {
        keyword: ["Exhaustion", "burnout", "overstimulation"],
        meaning: `When the Four of Swords appears in reverse, it can indicate that you are having difficulty finding the rest and recovery you need. You may be struggling with burnout, restlessness, or a lack of progress in your personal or professional life. This card reminds you that it's important to prioritize your own well-being and take the time you need to recharge your batteries. Consider seeking out new strategies or support systems to help you overcome any obstacles you may be facing.`,
      },
      description: `In the traditional Rider-Waite-Smith imagery, the Four of Swords shows a knight lying on a bed, with three swords hung on the wall behind him and a fourth sword lying beneath him. The image suggests a state of rest, recovery, and withdrawal from the world. The swords represent the mental and emotional challenges that the knight has faced, and the need to take a break from these struggles in order to heal and regain strength.`,
    },
    {
      id: 54,
      name: "Five of Swords",
      isReverse: false,
      image: require("assets/images/cards/54.jpg"),
      upright: {
        keyword: ["Conflict", "defeat", "betrayal", "loss"],
        meaning: `The Five of Swords is often associated with conflict and discord, particularly in relationships or group settings. This card can indicate that you have experienced a loss or defeat, and may feel like you have been betrayed by those around you. It may be tempting to resort to unethical or underhanded tactics to get what you want, but ultimately this approach will only lead to further conflict and isolation. Instead, the Five of Swords reminds us to choose our battles wisely, to seek resolution through communication and compromise, and to be mindful of the impact our actions have on those around us.`,
      },
      reverse: {
        keyword: ["Reconciliation", "making amends", "compromise"],
        meaning: `When reversed, the Five of Swords suggests that you may be in a position to reconcile with someone you have been in conflict with. This card can indicate a willingness to make amends, to seek forgiveness, and to find common ground. It is important to approach this process with sincerity and a willingness to listen and understand the other person's perspective. Remember that healing takes time, and that it is important to be patient and compassionate with yourself and others as you navigate this process.`,
      },
      description: `In the traditional Rider-Waite-Smith imagery, the Five of Swords shows a man holding three swords, while two others lie on the ground. Two figures can be seen walking away in the background, suggesting that the man has achieved victory over his opponents, but at a significant cost. The Five of Swords reminds us that conflict and competition can be costly, and that it is important to consider the long-term consequences of our actions. Sometimes, it is better to compromise or walk away from a situation rather than to insist on winning at all costs.`,
    },
    {
      id: 55,
      name: "Six of Swords",
      isReverse: false,
      image: require("assets/images/cards/55.jpg"),
      upright: {
        keyword: ["Transition", "change", "moving on", "leaving behind"],
        meaning:
          "The Six of Swords often represents a difficult transition or journey. It suggests leaving behind something that was once familiar and moving on to something new. While this can be a painful process, the card brings hope for a brighter future and the potential for emotional growth. The card may also suggest seeking guidance or support during this time of change.",
      },
      reverse: {
        keyword: [
          "Resistance to change",
          "emotional baggage",
          "unfinished business",
        ],
        meaning:
          "In reverse, the Six of Swords may indicate a resistance to change or a struggle to let go of emotional baggage from the past. It suggests that there may be unfinished business or unresolved issues that need to be addressed before moving on. Alternatively, the reverse meaning may also indicate being stuck in a situation or feeling directionless.",
      },
      description:
        "The Six of Swords shows a figure and a child in a boat, with six swords underneath them. The water is calm and the sky is clear, indicating that the journey ahead may be smoother than the one they are leaving behind. The swords can represent the challenges or difficulties that have been faced, but are now being left behind. The child can symbolize innocence and the potential for new beginnings, while the figure represents a guide or mentor who is leading the way to a brighter future.",
    },
    {
      id: 56,
      name: "Seven of Swords",
      isReverse: false,
      image: require("assets/images/cards/56.jpg"),
      upright: {
        keyword: ["Deception", "betrayal", "mind games", "strategy"],
        meaning:
          "The Seven of Swords can indicate deceit, trickery, or betrayal. Someone may be trying to deceive or manipulate you, or you may be tempted to engage in dishonest behavior yourself. Be cautious and try to see through any illusions or false promises. It is important to act with integrity and honesty in all situations, even if it may be more difficult in the short term.",
      },
      reverse: {
        keyword: ["Coming clean", "confession", "revealing the truth"],
        meaning:
          "When reversed, the Seven of Swords suggests a need for honesty and transparency. You may need to confront the truth of a situation, even if it is uncomfortable or difficult. It can also indicate a release from the burden of secrets or dishonesty, and a restoration of trust and harmony in your relationships. Take responsibility for your actions and be truthful with yourself and others.",
      },
      description:
        "The Seven of Swords depicts a figure sneaking away with five swords, leaving two behind. This card can represent deceit, trickery, or betrayal, as well as the importance of honesty and integrity. It suggests a need to be cautious and aware of any potential deception or manipulation, and to act with transparency and honesty in all situations. When reversed, this card can indicate a release from the burden of secrets and dishonesty, and a restoration of trust and harmony.",
    },
    {
      id: 58,
      name: "Nine of Swords",
      isReverse: false,
      image: require("assets/images/cards/58.jpg"),
      upright: {
        keyword: ["Anxiety", "fear", "nightmares", "mental anguish"],
        meaning: `The Nine of Swords represents anxiety, fear, and worries that keep you up at night. This card can indicate that you are experiencing a period of intense stress or mental anguish, which may be caused by external or internal factors. You may feel trapped in your own thoughts, unable to escape the cycle of negative thinking and self-doubt. The Nine of Swords is a reminder that our thoughts can create our reality, and that it's important to be mindful of the stories we tell ourselves.`,
      },
      reverse: {
        keyword: ["Releasing fear", "facing reality", "inner turmoil"],
        meaning: `When reversed, the Nine of Swords suggests that you are beginning to find ways to alleviate your anxiety and worries. You may be learning to let go of negative thought patterns, or finding ways to manage your stress levels. This card can indicate a period of release, relief, and acceptance. You may be learning to forgive yourself or others for past mistakes, and moving towards a more positive and empowered state of mind.`,
      },
      description: `The Nine of Swords depicts a person sitting up in bed, their head in their hands, while nine swords hang on the wall behind them. This card represents anxiety, fear, nightmares, and worries that keep you up at night. It can indicate a period of intense stress or mental anguish, which may be caused by external or internal factors. You may feel trapped in your own thoughts, unable to escape the cycle of negative thinking and self-doubt. The Nine of Swords is a reminder that our thoughts can create our reality, and that it's important to be mindful of the stories we tell ourselves.`,
    },
    {
      id: 59,
      name: "Ten of Swords",
      isReverse: false,
      image: require("assets/images/cards/59.jpg"),
      upright: {
        keyword: ["Betrayal", "backstabbing", "defeat", "ending"],
        meaning: `The Ten of Swords is a card of painful endings, betrayal, and deep wounds. It usually indicates that a difficult situation or chapter in your life is coming to an end, and that the process may be painful or traumatic. This card can also suggest that you have been deeply hurt or betrayed by someone you trusted.`,
      },
      reverse: {
        keyword: ["Recovery", "resurrection", "hope"],
        meaning: `The reversed Ten of Swords suggests that you are ready to start anew. You have gone through a painful process of endings and are now ready to rise from the ashes. This card can represent a rebirth or a second chance at life.`,
      },
      description: `The Ten of Swords depicts a figure lying face down with ten swords in their back, representing a painful and traumatic ending. The sky is dark and ominous, indicating a sense of loss and despair. This card can be difficult to see, but it reminds us that even in the darkest moments, there is always the potential for growth and transformation.`,
    },
    {
      id: 60,
      name: "Page of Swords",
      isReverse: false,
      image: require("assets/images/cards/60.jpg"),
      upright: {
        keyword: ["Intellect", "curiosity", "communication", "restlessness"],
        meaning: `The Page of Swords represents a young, curious and intelligent individual with a natural ability for problem-solving and strategic thinking. This card often suggests a time of mental agility, curiosity, and the exploration of new ideas or perspectives. You may feel energized to take action and pursue your goals with sharp focus and determination.`,
      },
      reverse: {
        keyword: ["Dishonesty", "manipulation", "sneakiness"],
        meaning: `When the Page of Swords appears reversed, it can indicate a lack of direction, impulsiveness, or reckless behavior. You may be feeling overwhelmed or unsure of how to proceed with your goals or tasks, leading to a tendency to act without careful consideration.`,
      },
      description: `The Page of Swords is a youthful and energetic figure who stands ready for action, with a sword in his hand and a look of determination on his face. He represents the qualities of curiosity, mental agility, and a thirst for knowledge. This card suggests that you may be entering a phase of exploration and learning, where you are eager to take on new challenges and pursue your goals with enthusiasm.

    The Page of Swords encourages you to stay alert and aware, ready to face any challenges that may come your way. He reminds you to trust in your own abilities and to be confident in your capacity for learning and growth. With his sword, he symbolizes the power of communication and the importance of clear thinking and effective communication in achieving success. This card is a reminder to stay curious, stay focused, and stay sharp.`,
    },
    {
      id: 61,
      name: "Knight of Swords",
      isReverse: false,
      image: require("assets/images/cards/61.jpg"),
      upright: {
        keyword: ["Ambitious", "action-oriented", "driven", "focused"],
        meaning:
          "The Knight of Swords represents ambition, action, and drive. He is focused on his goals and will do whatever it takes to achieve them. He is not afraid of taking risks and is willing to move quickly to achieve success. This card can indicate a time of great productivity and progress, as we are able to stay focused on our goals and move forward with confidence and determination.",
      },
      reverse: {
        keyword: ["Impulsive", "reckless", "rash"],
        meaning:
          "The Knight of Swords reversed can indicate a lack of focus and direction. We may be acting impulsively or making reckless decisions without considering the consequences. This card can also indicate a lack of patience and a tendency to act rashly. It is important to slow down and think things through before taking action.",
      },
      description: `The Knight of Swords is depicted as a young warrior on horseback, charging forward with his sword raised high. He is a symbol of ambition, action, and drive, and represents the energy and focus needed to achieve success. His armor and horse are both adorned with images of birds, which represent the swift movement and quick thinking necessary for success.`,
    },
    {
      id: 62,
      name: "Queen of Swords",
      isReverse: false,
      image: require("assets/images/cards/62.jpg"),
      upright: {
        keyword: ["Independent", "intelligent", "clear-headed", "skeptical"],
        meaning: `The Queen of Swords represents clarity of thought, intellectual power, objectivity, and independence. This card indicates that you have a keen intellect and the ability to make sound judgments based on reason and logic. You are able to see situations and people for what they truly are, without being swayed by emotions or biases. This card suggests that you may need to make a decision or take action that requires a clear and analytical mind.`,
      },
      reverse: {
        keyword: ["Cold-hearted", "bitter", "manipulative"],
        meaning: `When reversed, the Queen of Swords can indicate cruelty, coldness, and bitterness. You may be using your intelligence and sharp tongue to hurt others or to push them away. Alternatively, you may be overly critical of yourself and others, and unable to see the positive qualities in people or situations. This card suggests that you may need to work on developing compassion and empathy, and to learn to balance your intellect with your emotions."`,
      },
      description: `The Queen of Swords sits on her throne, holding a sword upright in her right hand. Her left hand is outstretched, pointing forward. She wears a stern expression, and her dress is adorned with butterflies and clouds. The butterflies symbolize transformation and the clouds symbolize the power of the mind. The Queen of Swords represents the mature, intellectual woman who is able to navigate the world with clarity and objectivity.`,
    },
    {
      id: 63,
      name: "King of Swords",
      isReverse: false,
      image: require("assets/images/cards/63.jpg"),
      upright: {
        keyword: ["Authority", "clear thinking", "truth", "judgment"],
        meaning: `The King of Swords represents authority, truth, clarity, and mental power. He is a strong and intelligent leader who is fair and just. This card may indicate that you or someone around you has a sharp mind and is able to cut through confusion to see the truth of a situation. The King of Swords is also associated with legal matters and may indicate the need to seek legal advice or representation.`,
      },
      reverse: {
        keyword: ["Manipulation", "cruelty", "coldness"],
        meaning: `When reversed, the King of Swords can indicate the misuse of power, manipulation, and cruelty. This card may suggest that someone in a position of authority is using their power to manipulate and control others, or that you may be tempted to do the same. It is important to remember that true leadership comes from a place of fairness, respect, and compassion, and that any abuse of power will ultimately lead to negative consequences.`,
      },
      description: `The King of Swords is depicted as a stern and powerful figure, seated on a throne and holding a sword upright in his right hand. His left hand is open, indicating his willingness to listen and consider other viewpoints. The sword represents the power of his intellect and his ability to cut through confusion and see the truth. The King of Swords is often associated with legal matters, as well as leadership and authority. He values truth, fairness, and justice above all else, and is not afraid to make difficult decisions when necessary.`,
    },
    {
      id: 64,
      name: "Ace of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/64.jpg"),
      upright: {
        keyword: ["New beginnings", "material abundance", "manifestation"],
        meaning: `The Ace of Pentacles represents a new beginning in the material world, such as a new job, business opportunity, or financial windfall.
      It indicates that we have the potential to manifest our desires in the physical world, and that we should focus on practical, tangible goals.
      This card is a reminder to take care of our material needs and to use our resources wisely.`,
      },
      reverse: {
        keyword: ["Lost opportunity", "financial instability", "greed"],
        meaning: `The Ace of Pentacles reversed may indicate a missed opportunity or a failure to manifest our desires in the material world.
      It can also suggest financial instability or overspending, and a need to reevaluate our priorities.
      This card can be a warning against greed and materialism, and a reminder to focus on what truly matters.`,
      },
      description: `The Ace of Pentacles shows a large hand holding a pentacle, which is surrounded by lush foliage and a bright blue sky. 
    The pentacle represents material abundance and the potential for manifestation, while the foliage and sky suggest growth and expansion. This card is a symbol of new beginnings in the material world, and the need to focus on practical, tangible goals.`,
    },
    {
      id: 65,
      name: "Two of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/65.jpg"),
      upright: {
        keyword: [
          "Balance",
          "flexibility",
          "adaptability",
          "juggling priorities",
        ],
        meaning: `The Two of Pentacles represents balance, flexibility, and adaptability. In the card, a figure stands with two pentacles in their hands, representing the need to juggle multiple priorities. The figure seems to be dancing or moving in a fluid way, suggesting the importance of finding harmony and rhythm in our lives.`,
      },
      reverse: {
        keyword: ["Imbalance", "disorganization", "overwhelm"],
        meaning: `When the Two of Pentacles is reversed, it may indicate that we are struggling to find balance in our lives. We may feel overwhelmed by multiple demands or challenges, or may be having trouble keeping our priorities straight.`,
      },
      description: `The Two of Pentacles is a card about finding balance and harmony in our lives. It suggests that we may be facing multiple demands or challenges, and need to find a way to juggle them all. This card reminds us that finding balance is an ongoing process, and that we may need to make adjustments as circumstances change.`,
    },
    {
      id: 66,
      name: "Three of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/66.jpg"),
      upright: {
        keyword: [
          "Collaboration",
          "teamwork",
          "skill-building",
          "implementation",
        ],
        meaning: `The Three of Pentacles is a card about collaboration, teamwork, and skill-building. In the card, three figures are shown working together on a project, each contributing their unique skills and expertise to create something of lasting value. This card suggests that we may need to work with others to achieve our goals, and that by combining our strengths and talents, we can create something greater than we could alone.`,
      },
      reverse: {
        keyword: ["Lack of teamwork", "miscommunication", "low-quality work"],
        meaning: `When the Three of Pentacles is reversed, it may indicate a lack of collaboration or teamwork. We may be struggling to work with others effectively, or may not be communicating our needs or ideas clearly. This card can also suggest that the quality of our work may suffer if we try to go it alone.`,
      },
      description: `The Three of Pentacles is a reminder that we don't have to go it alone. Sometimes, working with others can bring out the best in us and help us achieve more than we ever could on our own. This card encourages us to seek out others who can complement our skills and share our vision, and to be open to learning from them as we work together to create something of lasting value.`,
    },
    {
      id: 67,
      name: "Four of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/67.jpg"),
      upright: {
        keyword: ["Security", "conservation", "control", "possessiveness"],
        meaning: `The Four of Pentacles represents a need for security and control. In the card, a figure sits with four pentacles, holding them tightly to their chest. This suggests a tendency toward possessiveness and a desire to maintain what we already have.`,
      },
      reverse: {
        keyword: ["Financial insecurity", "greed", "generosity", "charity"],
        meaning: `When the Four of Pentacles is reversed, it may indicate financial insecurity or a fear of loss. We may be clinging too tightly to our possessions or resources, or may be afraid to take risks. This card suggests the importance of practicing generosity and being willing to share our resources with others.`,
      },
      description: `The Four of Pentacles is a card about security and control. It reminds us of the importance of financial stability and the need to conserve our resources. However, it also cautions against being too possessive or greedy, and encourages us to practice generosity and share our wealth with others when we can.`,
    },
    {
      id: 68,
      name: "Five of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/68.jpg"),
      upright: {
        keyword: ["Hardship", "poverty", "isolation", "insecurity"],
        meaning:
          "The Five of Pentacles is a card that represents hardship, poverty, and isolation. In the image, two figures walk through the snow outside a brightly lit church, suggesting that they are excluded or cut off from the support and comfort that the church represents. This card can indicate financial struggles, health problems, or feelings of insecurity and loneliness.",
      },
      reverse: {
        keyword: ["Recovery", "support", "community", "hope"],
        meaning:
          "When the Five of Pentacles is reversed, it may indicate that we are starting to recover from a difficult period. We may be receiving support from others, or finding new sources of strength and resilience. This card can suggest that there is hope for the future, and that we can find our way out of a difficult situation with the help of others.",
      },
      description:
        "The Five of Pentacles is a card about hardship and struggle. It can be a difficult card to receive, as it suggests that we may be facing significant challenges in our lives. However, it can also be a reminder that we are not alone, and that there is help and support available to us if we are willing to seek it out. This card can encourage us to reach out to others, and to find strength and hope in the face of adversity.",
    },
    {
      id: 69,
      name: "Six of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/69.jpg"),
      upright: {
        keyword: [
          "Generosity",
          "charity",
          "giving",
          "receiving",
          "fairness",
          "balance",
        ],
        meaning: `The Six of Pentacles represents generosity, charity, and giving. In the card, a figure is seen giving coins to two others who appear to be in need. This card suggests that we are in a position to help others and that doing so can bring us a sense of fulfillment and satisfaction. It also reminds us of the importance of balance and fairness in our interactions with others.`,
      },
      reverse: {
        keyword: ["Debt", "selfishness", "unfairness"],
        meaning: `When the Six of Pentacles is reversed, it may indicate that we are being too focused on our own needs and not paying enough attention to the needs of others. We may be struggling with debt or financial issues, or may be feeling resentful of those who we feel are not pulling their weight.`,
      },
      description: `The Six of Pentacles is a card about generosity, charity, and balance. It reminds us of the importance of giving and receiving in our lives, and encourages us to be mindful of our interactions with others. This card also suggests that we may be in a position to help others and that doing so can bring us a sense of satisfaction and fulfillment.`,
    },
    {
      id: 70,
      name: "Seven of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/70.jpg"),
      upright: {
        keyword: [
          "Growth",
          "patience",
          "perseverance",
          "reap what you sow",
          "long-term view",
        ],
        meaning: `The Seven of Pentacles represents growth, patience, and perseverance. In the card, a figure stands among several pentacles, looking at them with a sense of contemplation and evaluation. This suggests the need to take a long-term view and to have patience as we work towards our goals.`,
      },
      reverse: {
        keyword: [
          "Lack of long-term vision",
          "impatience",
          "disappointment",
          "lack of rewards",
        ],
        meaning: `When the Seven of Pentacles is reversed, it may indicate a lack of long-term vision or impatience. We may be focused on short-term gains or may feel disappointed that our efforts have not yet resulted in the rewards we were hoping for.`,
      },
      description: `The Seven of Pentacles reminds us to take a long-term view and to have patience as we work towards our goals. It encourages us to focus on growth and to persevere through challenges, even when the rewards are not immediate. This card reminds us that the fruits of our labor will eventually come, and that we should trust in the process of growth and development.`,
    },
    {
      id: 71,
      name: "Eight of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/71.jpg"),
      upright: {
        keyword: [
          "Diligence",
          "hard work",
          "commitment",
          "learning",
          "attention to detail",
        ],
        meaning:
          "The Eight of Pentacles represents hard work, diligence, and attention to detail. In the card, we see a figure who is diligently working on a pentacle, surrounded by seven other pentacles that have already been completed. This suggests that the figure is committed to learning and improving their craft, and is willing to put in the effort to achieve their goals. The card reminds us that success often comes from sustained effort over time, and that our commitment to our work can lead to mastery and accomplishment.",
      },
      reverse: {
        keyword: [
          "Perfectionism",
          "lack of progress",
          "lack of focus",
          "lack of effort",
        ],
        meaning:
          "When the Eight of Pentacles is reversed, it may indicate a tendency towards perfectionism or a lack of progress. We may be struggling to stay focused on our work or may be putting in insufficient effort. The card reminds us that while attention to detail is important, it is also important to maintain a sense of balance and not become so fixated on perfection that we lose sight of our larger goals.",
      },
      description:
        "The Eight of Pentacles is a card about diligence and hard work. It suggests that we may need to commit ourselves to learning and improving our skills, and that sustained effort over time can lead to success and accomplishment. This card reminds us that while it is important to pay attention to details, we should also maintain a sense of balance and not become too fixated on perfectionism. By staying focused on our goals and putting in the effort required, we can achieve mastery and excellence in our chosen pursuits.",
    },
    {
      id: 72,
      name: "Nine of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/72.jpg"),
      upright: {
        keyword: [
          "Abundance",
          "luxury",
          "financial independence",
          "self-sufficiency",
        ],
        meaning: `The Nine of Pentacles represents abundance, luxury, and financial independence. In the card, a woman stands in a garden surrounded by nine pentacles, suggesting that she has achieved a level of success and self-sufficiency. The bird perched on her hand represents the freedom and independence that comes with this success.`,
      },
      reverse: {
        keyword: ["Dependency", "self-worth tied to money", "overindulgence"],
        meaning: `When the Nine of Pentacles is reversed, it may indicate that we are overly reliant on material possessions or our financial status for our sense of self-worth. We may be overindulging in luxury or experiencing financial difficulties that are impacting our sense of independence.`,
      },
      description: `The Nine of Pentacles is a card about achieving success and financial independence. It reminds us that we have the ability to create abundance and luxury in our lives through our own hard work and determination. However, we should also be aware of the potential pitfalls of overindulgence or becoming too dependent on material possessions.`,
    },
    {
      id: 73,
      name: "Ten of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/73.jpg"),
      upright: {
        keyword: [
          "Abundance",
          "legacy",
          "family",
          "fulfillment",
          "material comfort",
        ],
        meaning: `The Ten of Pentacles represents material comfort, family, and the fulfillment of our goals. It suggests that we have achieved a level of abundance and security that allows us to focus on building a legacy or leaving a positive impact on those around us. This card also emphasizes the importance of family and the interconnectedness of our lives.`,
      },
      reverse: {
        keyword: ["Financial loss", "family conflict", "unfulfilled dreams"],
        meaning: `When the Ten of Pentacles is reversed, it may indicate financial loss, family conflict, or unfulfilled dreams. This card reminds us to be mindful of our material resources and to seek harmony within our family and community.`,
      },
      description: `The Ten of Pentacles is a card of abundance, security, and legacy. It represents the culmination of our efforts to achieve material comfort and the fulfillment of our goals. This card reminds us of the importance of family and community, and encourages us to leave a positive impact on those around us. However, we must also be mindful of our resources and seek to create harmony and balance in our lives.`,
    },
    {
      id: 74,
      name: "Page of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/74.jpg"),
      upright: {
        keyword: [
          "Opportunity",
          "new beginnings",
          "learning",
          "exploration",
          "studiousness",
        ],
        meaning: `The Page of Pentacles represents a new opportunity or beginning, particularly in the realm of career, education, or finances. The card often depicts a young person studying or examining a pentacle, suggesting a focus on learning and exploration. This card encourages us to be studious and curious, and to seek out new knowledge and experiences.`,
      },
      reverse: {
        keyword: [
          "Missed opportunity",
          "lack of progress",
          "neglecting studies",
        ],
        meaning: `When the Page of Pentacles is reversed, it may indicate a missed opportunity or a lack of progress in our endeavors. We may be neglecting our studies or failing to take advantage of new opportunities. This card reminds us to stay focused and disciplined in pursuit of our goals.`,
      },
      description: `The Page of Pentacles is a card about new beginnings and opportunities in the material realm. It suggests a focus on education, career, or finances, and encourages us to stay curious and disciplined in pursuit of our goals. This card reminds us that success requires both hard work and a willingness to learn and grow.`,
    },
    {
      id: 75,
      name: "Knight of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/75.jpg"),
      upright: {
        keyword: [
          "Responsibility",
          "hard work",
          "persistence",
          "consistency",
          "reliability",
        ],
        meaning: `The Knight of Pentacles is a symbol of responsibility, hard work, and persistence. In the card, a knight is shown riding a horse while holding a pentacle. The knight represents a person who is dedicated to their work and takes their responsibilities seriously. The horse symbolizes the steady and consistent effort required to achieve success. This card encourages us to be reliable, consistent, and dedicated to our goals, and reminds us that slow and steady progress is often the most effective.`,
      },
      reverse: {
        keyword: ["Laziness", "inaction", "stagnation", "resistance to change"],
        meaning: `When the Knight of Pentacles is reversed, it may indicate a lack of motivation or energy. We may be feeling lazy or unmotivated, or may be resistant to change. This card reminds us that it's important to stay focused on our goals and keep moving forward, even when things get tough.`,
      },
      description: `The Knight of Pentacles represents the qualities of responsibility, hard work, and consistency. This card reminds us that we need to stay focused on our goals and be willing to put in the effort required to achieve them. Whether we are pursuing a career, a creative project, or a personal goal, the Knight of Pentacles encourages us to be reliable, persistent, and dedicated to our work.`,
    },
    {
      id: 76,
      name: "Queen of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/76.jpg"),
      upright: {
        keyword: [
          "Nurturing",
          "prosperity",
          "practicality",
          "homemaking",
          "generosity",
        ],
        meaning: `The Queen of Pentacles represents a practical and nurturing energy. In the card, a queen sits on her throne holding a pentacle, surrounded by abundance and nature. This card suggests that we are in a good position to create a prosperous and comfortable home life for ourselves and those we care about. It may also indicate generosity and a desire to share our resources with others.`,
      },
      reverse: {
        keyword: ["Self-centeredness", "dependency", "jealousy"],
        meaning: `When the Queen of Pentacles is reversed, it may indicate that we are being too focused on our own needs and neglecting the needs of others. We may also be overly dependent on others for our well-being, or experiencing jealousy or envy towards those who have more than us.`,
      },
      description: `The Queen of Pentacles is a card about creating a comfortable and prosperous home life. It suggests that we have the resources and ability to create a nurturing environment for ourselves and those we care about. This card reminds us to be practical and generous, and to find joy in the simple pleasures of life.`,
    },
    {
      id: 77,
      name: "King of Pentacles",
      isReverse: false,
      image: require("assets/images/cards/77.jpg"),
      upright: {
        keyword: [
          "Wealth",
          "abundance",
          "success",
          "security",
          "stability",
          "generosity",
        ],
        meaning: `The King of Pentacles represents success, wealth, and abundance. In the card, a king sits on his throne, surrounded by symbols of his wealth and power. He is a master of the material world, with a keen sense of how to make money and manage resources.`,
      },
      reverse: {
        keyword: ["Greed", "overindulgence", "financial troubles"],
        meaning: `When the King of Pentacles is reversed, it may indicate that we are becoming too focused on material wealth at the expense of other important things in life. We may be overindulging in luxury, or may be experiencing financial troubles due to poor management of resources.`,
      },
      description: `The King of Pentacles is a card of material success and stability. It reminds us of the importance of managing our resources wisely, and of the potential rewards that come from doing so. This card also suggests generosity and a willingness to share our wealth and resources with others.`,
    },
  ],
};
