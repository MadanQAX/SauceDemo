$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SauceDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Sauce Demo Application Testing Feature",
  "description": "",
  "id": "sauce-demo-application-testing-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 229,
  "name": "Finish Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 228,
      "name": "@e2e"
    },
    {
      "line": 228,
      "name": "@checkoutwoproduct"
    }
  ]
});
formatter.step({
  "line": 231,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 232,
  "name": "user is on home page of swag labs",
  "keyword": "When "
});
formatter.step({
  "line": 233,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 234
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 235,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.examples({
  "line": 239,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 240,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 241,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 242,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 243,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 436700,
  "status": "passed"
});
formatter.before({
  "duration": 4438297900,
  "status": "passed"
});
formatter.scenario({
  "line": 241,
  "name": "Finish Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 228,
      "name": "@e2e"
    },
    {
      "line": 228,
      "name": "@checkoutwoproduct"
    }
  ]
});
formatter.step({
  "line": 231,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 232,
  "name": "user is on home page of swag labs",
  "keyword": "When "
});
formatter.step({
  "line": 233,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 234
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 235,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 743254600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_of_swag_labs()"
});
formatter.result({
  "duration": 592291400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1490000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 476815400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 471561300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 214879500,
  "status": "passed"
});
formatter.after({
  "duration": 603763200,
  "status": "passed"
});
formatter.after({
  "duration": 62500,
  "status": "passed"
});
formatter.before({
  "duration": 159800,
  "status": "passed"
});
formatter.before({
  "duration": 3906443700,
  "status": "passed"
});
formatter.scenario({
  "line": 242,
  "name": "Finish Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 228,
      "name": "@e2e"
    },
    {
      "line": 228,
      "name": "@checkoutwoproduct"
    }
  ]
});
formatter.step({
  "line": 231,
  "name": "user enters \"problem_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 232,
  "name": "user is on home page of swag labs",
  "keyword": "When "
});
formatter.step({
  "line": 233,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 234
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 235,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 449646000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_of_swag_labs()"
});
formatter.result({
  "duration": 27932600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 301596500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 639569800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 354275400,
  "status": "passed"
});
formatter.after({
  "duration": 624874800,
  "status": "passed"
});
formatter.after({
  "duration": 54100,
  "status": "passed"
});
formatter.before({
  "duration": 37000,
  "status": "passed"
});
formatter.before({
  "duration": 2055232000,
  "status": "passed"
});
formatter.scenario({
  "line": 243,
  "name": "Finish Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-on-overview-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 228,
      "name": "@e2e"
    },
    {
      "line": 228,
      "name": "@checkoutwoproduct"
    }
  ]
});
formatter.step({
  "line": 231,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 232,
  "name": "user is on home page of swag labs",
  "keyword": "When "
});
formatter.step({
  "line": 233,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 234
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 235,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5678222200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_of_swag_labs()"
});
formatter.result({
  "duration": 43226400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 101500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 421329500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 448111000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 222465500,
  "status": "passed"
});
formatter.after({
  "duration": 641793800,
  "status": "passed"
});
formatter.after({
  "duration": 57700,
  "status": "passed"
});
});