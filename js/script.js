document.addEventListener('click', function () {
    const audio = document.getElementById('music');
    audio.play();
  });
  
  document.getElementById('name').textContent = 'Theoryian';
  document.getElementById('about').textContent = 'Hi!!! Im Theoryian!. I play games, code, and I am very active on0 Discord! Thank you for visiting my website! I dont have many socials, but my discord is konciouss, you can friend me there! But please understand I might not accept it. I am not super social outside of Discord and have social anxiety. Please note that Im under 18, so I might not respond to you. Thank you for your understanding!';
  document.getElementById('stuff').textContent = 'She/Her, 13-15, Computer addict, Protogen, Furry, Therian, Gemini, Trans, Unfunny, Low-sleep'

  const socialLinks = [
    {name: 'Youtube', url: 'https://www.youtube.com/channel/UCJSPpp8fPp2govWCgn6RXKg'},
    {name: 'Discord', url: 'https://discord.gg/67F6vHNQDs'},
    {name: 'Github', url: 'https://github.com/Thoryian'},
    {name: 'Scratch', url: 'https://scratch.mit.edu/users/theoryian/'},
    {name: 'Roblox', url: 'https://www.roblox.com/users/4575669522/profile'},
    {name: 'Pinterest', url: 'https://www.pinterest.com/fluxcore847/'},
    {name: 'Paypal', url: 'https://www.paypal.com/paypalme/fluxxcore'},
  ];
  
  const socialList = document.getElementById('social-links');
  socialLinks.forEach(link => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = link.name;
    anchor.href = link.url;
    listItem.appendChild(anchor);
    socialList.appendChild(listItem);
  });
  
  const audio = document.getElementById('music');
  let context = null;
  
  function initAudioContext() {
    if (context === null) {
      context = new AudioContext();
    }
  }
  
  audio.addEventListener('play', function () {
    initAudioContext();
  
    if (context.state === 'suspended') {
      context.resume();
    }
  
    const source = context.createMediaElementSource(audio);
    const gainNode = context.createGain();
  
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;
  
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(context.destination);
  
    gainNode.gain.setValueAtTime(0.01, context.currentTime);
  
    const fadeInDuration = 10;
    const endTime = context.currentTime + fadeInDuration;
    gainNode.gain.linearRampToValueAtTime(1, endTime);
  });
  