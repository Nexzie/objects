// Question one

function InstagramPost(
    authorHandle,
    content,
    imageLink,
    numberViews,
    numberLikes
  ) {
    this.authorHandle = authorHandle
    this.content = content
    this.imageLink = imageLink
    this.numberViews = numberViews
    this.numberLikes = numberLikes
  }
  
  // Question two
  
  const post1 = new InstagramPost(
    'nexzie',
    'welcome to my world',
    'www.imageLink/asdgjdkgnk/post.jpeg',
    30000,
    40000
  )
  
  const post2 = new InstagramPost(
    'nexzie_',
    'law and life',
    'www.imageLink/asdgjdkgnk/post.jpeg',
    20000,
    40000
  )
  
  // Question three
  // Question three(a)
  function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    }
  }
  const personMusa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State')
  
  // Question three (b)
  function createJambScores(eng, govt, lit, crk) {
    return {
      eng: eng,
      govt: govt,
      lit: lit,
      crk: crk,
    }
  }
  const musaJambScores = createJambScores(70, 85, 82, 94)
  
  // Question four
  // - Through the spread operator.
  // - Call the Object.assign() function.
  // - Use JSON parsing.
  // - Use the structuredClone() function.
  //Examples of each
  const data = { name: 'chi', age: 14 }
  // 1
  const copy1 = { ...data }
  // 2
  const copy2 = Object.assign({}, data)
  // 3
  const copy3 = JSON.parse(JSON.stringify(data))
  // 4
  const copy4 = structuredClone(data)
  
  // Question five
  const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Pter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
  }
  
  for (party in presidentialCandidates) {
    console.log(
      `${presidentialCandidates[party]} is the presidential candiate of ${party}`
    )
  }