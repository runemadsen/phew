import First from "./bundle/first"
import Second from './bundle/second'

class Bundle {

  constructor() {
    var first = new First();
    var second = new Second();
  }

}

// This will make Bundle available as window.Bundle
global.Bundle = Bundle;