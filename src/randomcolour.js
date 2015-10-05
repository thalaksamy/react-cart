RandomColour = {


  colourChars: {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f'
  },


  randomColour: function() {
    return [
      '#',
      this.randomHexChar(),
      this.randomHexChar(),
      this.randomHexChar()
    ].join('');
  },


  randomHexChar: function() {
    return this.colourChars[Math.floor(Math.random() * 6)];
  }


}
