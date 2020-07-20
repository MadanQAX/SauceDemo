$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SauceDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Sauce Demo Application Testing Feature",
  "description": "",
  "id": "sauce-demo-application-testing-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "###Test Scenario 1"
    }
  ],
  "line": 5,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on home page and check for prodcuts",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 12,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 13,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 343600,
  "status": "passed"
});
formatter.before({
  "duration": 3185333900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on home page and check for prodcuts",
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
  "duration": 1009199200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 81168700,
  "status": "passed"
});
formatter.after({
  "duration": 618604100,
  "status": "passed"
});
formatter.after({
  "duration": 57300,
  "status": "passed"
});
formatter.before({
  "duration": 60300,
  "status": "passed"
});
formatter.before({
  "duration": 2000699400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"problem_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on home page and check for prodcuts",
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
  "duration": 453542700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 63977500,
  "status": "passed"
});
formatter.after({
  "duration": 584912100,
  "status": "passed"
});
formatter.after({
  "duration": 51000,
  "status": "passed"
});
formatter.before({
  "duration": 71900,
  "status": "passed"
});
formatter.before({
  "duration": 3866984600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Swag Labs Login with Valid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-valid-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on home page and check for prodcuts",
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
  "duration": 5594388600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 74919200,
  "status": "passed"
});
formatter.after({
  "duration": 612861100,
  "status": "passed"
});
formatter.after({
  "duration": 852400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "####Test Scenario 2"
    }
  ],
  "line": 18,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 24,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;1"
    },
    {
      "cells": [
        "standarduser",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 25,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;2"
    },
    {
      "cells": [
        "standard_user",
        "secretsauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 26,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;3"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ],
      "line": 27,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;4"
    },
    {
      "cells": [
        "test_user",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 28,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;5"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ],
      "line": 29,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;6"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 30,
      "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 66500,
  "status": "passed"
});
formatter.before({
  "duration": 2072687600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"standarduser\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify error message \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standarduser",
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
  "duration": 345382600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 60884200,
  "status": "passed"
});
formatter.after({
  "duration": 597403000,
  "status": "passed"
});
formatter.after({
  "duration": 44100,
  "status": "passed"
});
formatter.before({
  "duration": 38200,
  "status": "passed"
});
formatter.before({
  "duration": 2065951600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"standard_user\" and \"secretsauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify error message \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "secretsauce",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 330392200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 53134800,
  "status": "passed"
});
formatter.after({
  "duration": 573307700,
  "status": "passed"
});
formatter.after({
  "duration": 48900,
  "status": "passed"
});
formatter.before({
  "duration": 46600,
  "status": "passed"
});
formatter.before({
  "duration": 1950632100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"locked_out_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify error message \"Epic sadface: Sorry, this user has been locked out.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 35
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 330608500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Sorry, this user has been locked out.",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 53638200,
  "status": "passed"
});
formatter.after({
  "duration": 571915000,
  "status": "passed"
});
formatter.after({
  "duration": 57300,
  "status": "passed"
});
formatter.before({
  "duration": 48800,
  "status": "passed"
});
formatter.before({
  "duration": 1947631900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"test_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify error message \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test_user",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 29
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 359327400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 64225600,
  "status": "passed"
});
formatter.after({
  "duration": 586813700,
  "status": "passed"
});
formatter.after({
  "duration": 43300,
  "status": "passed"
});
formatter.before({
  "duration": 42200,
  "status": "passed"
});
formatter.before({
  "duration": 2048962500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify error message \"Epic sadface: Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 20
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 263759300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 67509900,
  "status": "passed"
});
formatter.after({
  "duration": 577073900,
  "status": "passed"
});
formatter.after({
  "duration": 42600,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
  "status": "passed"
});
formatter.before({
  "duration": 3908862000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Swag Labs Login with Invalid User",
  "description": "",
  "id": "sauce-demo-application-testing-feature;swag-labs-login-with-invalid-user;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    },
    {
      "line": 17,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user enters \"standard_user\" and \"\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "verify error message \"Epic sadface: Password is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 13
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "SauceDemoStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 270332000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 22
    }
  ],
  "location": "SauceDemoStepDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 49311800,
  "status": "passed"
});
formatter.after({
  "duration": 572172700,
  "status": "passed"
});
formatter.after({
  "duration": 43600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 33,
      "value": "###Test Scenario 3"
    }
  ],
  "line": 35,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "verify products on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 42,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 43,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 44,
      "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 53500,
  "status": "passed"
});
formatter.before({
  "duration": 1920712500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "verify products on home page",
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
  "duration": 491366200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 66515100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 766480000,
  "status": "passed"
});
formatter.after({
  "duration": 604832600,
  "status": "passed"
});
formatter.after({
  "duration": 47300,
  "status": "passed"
});
formatter.before({
  "duration": 54900,
  "status": "passed"
});
formatter.before({
  "duration": 3862874800,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;verify-products-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "verify products on home page",
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
  "duration": 5625354000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 47574300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 513953900,
  "status": "passed"
});
formatter.after({
  "duration": 606185300,
  "status": "passed"
});
formatter.after({
  "duration": 41900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 47,
      "value": "###Test Scenario 4"
    }
  ],
  "line": 49,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@homepage"
    },
    {
      "line": 48,
      "name": "@sort"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 54
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 55
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 56
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 57
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 58
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 61,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 62,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 63,
      "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48800,
  "status": "passed"
});
formatter.before({
  "duration": 4025879000,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@homepage"
    },
    {
      "line": 48,
      "name": "@sort"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 54
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 55
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 56
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 57
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 58
    }
  ],
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
  "duration": 499350600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 56034700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 687540000,
  "status": "passed"
});
formatter.after({
  "duration": 595244900,
  "status": "passed"
});
formatter.after({
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 55100,
  "status": "passed"
});
formatter.before({
  "duration": 3974726200,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Sort Products on Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;sort-products-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@homepage"
    },
    {
      "line": 48,
      "name": "@sort"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "verify user can sort products",
  "rows": [
    {
      "cells": [
        "value",
        "message",
        "firstproduct"
      ],
      "line": 54
    },
    {
      "cells": [
        "za",
        "1st product displayed after sort of Z to A:",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 55
    },
    {
      "cells": [
        "lohi",
        "1st product displayed after sort of Low to High:",
        "Sauce Labs Onesie"
      ],
      "line": 56
    },
    {
      "cells": [
        "hilo",
        "1st product displayed after sort of High to Low:",
        "Sauce Labs Fleece Jacket"
      ],
      "line": 57
    },
    {
      "cells": [
        "az",
        "1st product displayed after sort of A to Z:",
        "Sauce Labs Backpack"
      ],
      "line": 58
    }
  ],
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
  "duration": 5544644200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 77247600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 894139200,
  "status": "passed"
});
formatter.after({
  "duration": 601295100,
  "status": "passed"
});
formatter.after({
  "duration": 44900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 65,
      "value": "###Test Scenario 5"
    }
  ],
  "line": 67,
  "name": "All Items option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@homepage"
    },
    {
      "line": 66,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user clicks on all items",
  "keyword": "Then "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 74,
      "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 75,
      "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 76,
      "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44500,
  "status": "passed"
});
formatter.before({
  "duration": 3909320900,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "All Items option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@homepage"
    },
    {
      "line": 66,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user clicks on all items",
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
  "duration": 511285200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 61707100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_all_items()"
});
formatter.result({
  "duration": 594244200,
  "status": "passed"
});
formatter.after({
  "duration": 609959600,
  "status": "passed"
});
formatter.after({
  "duration": 38100,
  "status": "passed"
});
formatter.before({
  "duration": 45600,
  "status": "passed"
});
formatter.before({
  "duration": 1942758100,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "All Items option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;all-items-option-of-hamburger;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@homepage"
    },
    {
      "line": 66,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user clicks on all items",
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
  "duration": 5522831600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 53896000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_all_items()"
});
formatter.result({
  "duration": 5576235700,
  "status": "passed"
});
formatter.after({
  "duration": 609039600,
  "status": "passed"
});
formatter.after({
  "duration": 41300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 78,
      "value": "###Test Scenario 6"
    }
  ],
  "line": 80,
  "name": "About option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;about-option-of-hamburger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@homepage"
    },
    {
      "line": 79,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user clicks on about",
  "keyword": "Then "
});
formatter.examples({
  "line": 86,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 87,
      "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 88,
      "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 89,
      "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2949900,
  "status": "passed"
});
formatter.before({
  "duration": 2155589300,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "About option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@homepage"
    },
    {
      "line": 79,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user clicks on about",
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
  "duration": 602796700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 62294900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_about()"
});
formatter.result({
  "duration": 2785987000,
  "status": "passed"
});
formatter.after({
  "duration": 610919500,
  "status": "passed"
});
formatter.after({
  "duration": 398300,
  "status": "passed"
});
formatter.before({
  "duration": 44700,
  "status": "passed"
});
formatter.before({
  "duration": 1974926100,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "About option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;about-option-of-hamburger;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@homepage"
    },
    {
      "line": 79,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user clicks on about",
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
  "duration": 5571720400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 135818900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_about()"
});
formatter.result({
  "duration": 8039442300,
  "status": "passed"
});
formatter.after({
  "duration": 606114000,
  "status": "passed"
});
formatter.after({
  "duration": 52500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 91,
      "value": "###Test Scenario 7"
    }
  ],
  "line": 93,
  "name": "Reset App State option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@homepage"
    },
    {
      "line": 92,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user clicks on Reset App State",
  "keyword": "Then "
});
formatter.examples({
  "line": 99,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 100,
      "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 101,
      "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 102,
      "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39100,
  "status": "passed"
});
formatter.before({
  "duration": 1960910300,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Reset App State option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@homepage"
    },
    {
      "line": 92,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user clicks on Reset App State",
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
  "duration": 455684800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 57808200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on__Reset_App_State()"
});
formatter.result({
  "duration": 441165100,
  "status": "passed"
});
formatter.after({
  "duration": 658948100,
  "status": "passed"
});
formatter.after({
  "duration": 33000,
  "status": "passed"
});
formatter.before({
  "duration": 33900,
  "status": "passed"
});
formatter.before({
  "duration": 3912438700,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Reset App State option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;reset-app-state-option-of-hamburger;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@homepage"
    },
    {
      "line": 92,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user clicks on Reset App State",
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
  "duration": 5676588100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 189177700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on__Reset_App_State()"
});
formatter.result({
  "duration": 371605100,
  "status": "passed"
});
formatter.after({
  "duration": 597472500,
  "status": "passed"
});
formatter.after({
  "duration": 35700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 104,
      "value": "###Test Scenario 8"
    }
  ],
  "line": 106,
  "name": "Logout option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@homepage"
    },
    {
      "line": 105,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "user clicks on logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 113,
      "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 114,
      "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 115,
      "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 33900,
  "status": "passed"
});
formatter.before({
  "duration": 2036788900,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Logout option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@homepage"
    },
    {
      "line": 105,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "user clicks on logout",
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
  "duration": 586125200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 53920400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 424164800,
  "status": "passed"
});
formatter.after({
  "duration": 617410900,
  "status": "passed"
});
formatter.after({
  "duration": 32700,
  "status": "passed"
});
formatter.before({
  "duration": 33000,
  "status": "passed"
});
formatter.before({
  "duration": 2032093600,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Logout option of hamburger",
  "description": "",
  "id": "sauce-demo-application-testing-feature;logout-option-of-hamburger;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@homepage"
    },
    {
      "line": 105,
      "name": "@hamburger"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "user clicks on logout",
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
  "duration": 5664968500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 60485700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 492135800,
  "status": "passed"
});
formatter.after({
  "duration": 614877500,
  "status": "passed"
});
formatter.after({
  "duration": 36600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 117,
      "value": "###Test Scenario 9"
    }
  ],
  "line": 119,
  "name": "Adding products from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-products-from-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@homepage"
    },
    {
      "line": 118,
      "name": "@addproduct"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 124
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 125
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 126
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 127
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 129,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 130,
      "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 131,
      "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 132,
      "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36900,
  "status": "passed"
});
formatter.before({
  "duration": 2053736300,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "Adding products from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@addproduct"
    },
    {
      "line": 118,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 124
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 125
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 126
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 127
    }
  ],
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
  "duration": 556344000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 127096400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1062633600,
  "status": "passed"
});
formatter.after({
  "duration": 617726600,
  "status": "passed"
});
formatter.after({
  "duration": 31400,
  "status": "passed"
});
formatter.before({
  "duration": 38700,
  "status": "passed"
});
formatter.before({
  "duration": 3895743200,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Adding products from Home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-products-from-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@addproduct"
    },
    {
      "line": 118,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 124
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 125
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 126
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 127
    }
  ],
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
  "duration": 5572387100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 45520400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5870846100,
  "status": "passed"
});
formatter.after({
  "duration": 627910200,
  "status": "passed"
});
formatter.after({
  "duration": 1316000,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 134,
      "value": "###Test Scenario 10"
    }
  ],
  "line": 136,
  "name": "Remove products on home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@homepage"
    },
    {
      "line": 135,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 138,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 141
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 142
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "user removes product on home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 144
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 145
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 147,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 148,
      "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 149,
      "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 150,
      "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36600,
  "status": "passed"
});
formatter.before({
  "duration": 2056170700,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "Remove products on home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@removeproduct"
    },
    {
      "line": 135,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 138,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 141
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 142
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "user removes product on home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 144
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 145
    }
  ],
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
  "duration": 525438900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 56252800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 547641800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_on_home_page(DataTable)"
});
formatter.result({
  "duration": 227288300,
  "status": "passed"
});
formatter.after({
  "duration": 588716400,
  "status": "passed"
});
formatter.after({
  "duration": 515900,
  "status": "passed"
});
formatter.before({
  "duration": 35400,
  "status": "passed"
});
formatter.before({
  "duration": 3873276600,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "Remove products on home Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 135,
      "name": "@removeproduct"
    },
    {
      "line": 135,
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "line": 138,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 141
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 142
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "user removes product on home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 144
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 145
    }
  ],
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
  "duration": 5579243500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 62226300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5665064800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_on_home_page(DataTable)"
});
formatter.result({
  "duration": 248307200,
  "status": "passed"
});
formatter.after({
  "duration": 666988300,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 152,
      "value": "###Test Scenario 11"
    }
  ],
  "line": 154,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@addproduct"
    }
  ]
});
formatter.step({
  "line": 156,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 159
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 160
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 161
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 162
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 163
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 164
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 165
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 167,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 168,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 169,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 170,
      "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37300,
  "status": "passed"
});
formatter.before({
  "duration": 3993333000,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@addproduct"
    }
  ]
});
formatter.step({
  "line": 156,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 159
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 160
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 161
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 162
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 163
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 164
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 165
    }
  ],
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
  "duration": 611093300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 69113100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 2945763000,
  "status": "passed"
});
formatter.after({
  "duration": 605430200,
  "status": "passed"
});
formatter.after({
  "duration": 30800,
  "status": "passed"
});
formatter.before({
  "duration": 33900,
  "status": "passed"
});
formatter.before({
  "duration": 2003364200,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "Adding product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;adding-product-from-product-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@addproduct"
    }
  ]
});
formatter.step({
  "line": 156,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 159
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 160
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 161
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 162
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 163
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 164
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 165
    }
  ],
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
  "duration": 5617604700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 214412900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 27870396700,
  "status": "passed"
});
formatter.after({
  "duration": 603597100,
  "status": "passed"
});
formatter.after({
  "duration": 32200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 172,
      "value": "###Test Scenario 12"
    }
  ],
  "line": 174,
  "name": "Remove product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@addproduct"
    },
    {
      "line": 173,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 176,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 177,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 179
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 180
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 181
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "user removes products from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 183
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 184
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 185
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 187,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 188,
      "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 189,
      "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 190,
      "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34700,
  "status": "passed"
});
formatter.before({
  "duration": 3887219700,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "Remove product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@addproduct"
    },
    {
      "line": 173,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 176,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 177,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 179
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 180
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 181
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "user removes products from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 183
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 184
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 185
    }
  ],
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
  "duration": 453850200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 62755900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 910354100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 895552400,
  "status": "passed"
});
formatter.after({
  "duration": 621392800,
  "status": "passed"
});
formatter.after({
  "duration": 35300,
  "status": "passed"
});
formatter.before({
  "duration": 146400,
  "status": "passed"
});
formatter.before({
  "duration": 3878170200,
  "status": "passed"
});
formatter.scenario({
  "line": 190,
  "name": "Remove product from Product Details Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-product-from-product-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@addproduct"
    },
    {
      "line": 173,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 176,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 177,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "user adds product from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 179
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 180
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 181
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "user removes products from product details page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 183
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 184
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 185
    }
  ],
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
  "duration": 5589878400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 47542800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 5983562100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 15972774200,
  "status": "passed"
});
formatter.after({
  "duration": 628570200,
  "status": "passed"
});
formatter.after({
  "duration": 31200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 192,
      "value": "###Test Scenario 13"
    }
  ],
  "line": 194,
  "name": "Remove products on Cart page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 193,
      "name": "@cartpage"
    },
    {
      "line": 193,
      "name": "@removeproduct"
    }
  ]
});
formatter.step({
  "line": 196,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 197,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 199
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 200
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "user removes products from cart",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 202
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 203
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 205,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 206,
      "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 207,
      "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 208,
      "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40400,
  "status": "passed"
});
formatter.before({
  "duration": 1978832600,
  "status": "passed"
});
formatter.scenario({
  "line": 207,
  "name": "Remove products on Cart page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 193,
      "name": "@removeproduct"
    },
    {
      "line": 193,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 196,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 197,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 199
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 200
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "user removes products from cart",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 202
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 203
    }
  ],
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
  "duration": 522468900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 57348900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 572852500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_cart(DataTable)"
});
formatter.result({
  "duration": 341471700,
  "status": "passed"
});
formatter.after({
  "duration": 645304600,
  "status": "passed"
});
formatter.after({
  "duration": 31900,
  "status": "passed"
});
formatter.before({
  "duration": 34200,
  "status": "passed"
});
formatter.before({
  "duration": 2053027100,
  "status": "passed"
});
formatter.scenario({
  "line": 208,
  "name": "Remove products on Cart page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;remove-products-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 193,
      "name": "@removeproduct"
    },
    {
      "line": 193,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 196,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 197,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 199
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 200
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "user removes products from cart",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 202
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 203
    }
  ],
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
  "duration": 5608850100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 51597300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5539649800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_cart(DataTable)"
});
formatter.result({
  "duration": 404332200,
  "status": "passed"
});
formatter.after({
  "duration": 672961200,
  "status": "passed"
});
formatter.after({
  "duration": 34000,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 210,
      "value": "###Test Scenario 14"
    }
  ],
  "line": 212,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 211,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 217
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 218
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 219,
  "name": "user continue shopping from cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 221,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 222,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 223,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 224,
      "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34300,
  "status": "passed"
});
formatter.before({
  "duration": 3983139300,
  "status": "passed"
});
formatter.scenario({
  "line": 223,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 211,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 217
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 218
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 219,
  "name": "user continue shopping from cart",
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
  "duration": 607538600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 64932700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 586011100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 401266200,
  "status": "passed"
});
formatter.after({
  "duration": 583841200,
  "status": "passed"
});
formatter.after({
  "duration": 37600,
  "status": "passed"
});
formatter.before({
  "duration": 38000,
  "status": "passed"
});
formatter.before({
  "duration": 2072722900,
  "status": "passed"
});
formatter.scenario({
  "line": 224,
  "name": "Continue Shopping on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;continue-shopping-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 211,
      "name": "@cartpage"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 217
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 218
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 219,
  "name": "user continue shopping from cart",
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
  "duration": 5571484900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 48897600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5499307400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 5405605100,
  "status": "passed"
});
formatter.after({
  "duration": 581212300,
  "status": "passed"
});
formatter.after({
  "duration": 34200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 226,
      "value": "###Test Scenario 15"
    }
  ],
  "line": 228,
  "name": "checkout on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 227,
      "name": "@checkout"
    },
    {
      "line": 227,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 230,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 231,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 232,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 233
    },
    {
      "cells": [
        "Sauce Labs Backpack"
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
formatter.examples({
  "line": 237,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 238,
      "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 239,
      "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 240,
      "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46000,
  "status": "passed"
});
formatter.before({
  "duration": 3890322000,
  "status": "passed"
});
formatter.scenario({
  "line": 239,
  "name": "checkout on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 227,
      "name": "@checkout"
    },
    {
      "line": 227,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 230,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 231,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 232,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 233
    },
    {
      "cells": [
        "Sauce Labs Backpack"
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
  "duration": 493494900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 46591300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 601885900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 375720700,
  "status": "passed"
});
formatter.after({
  "duration": 615121800,
  "status": "passed"
});
formatter.after({
  "duration": 37200,
  "status": "passed"
});
formatter.before({
  "duration": 37400,
  "status": "passed"
});
formatter.before({
  "duration": 1999044400,
  "status": "passed"
});
formatter.scenario({
  "line": 240,
  "name": "checkout on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 227,
      "name": "@checkout"
    },
    {
      "line": 227,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 230,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 231,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 232,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 233
    },
    {
      "cells": [
        "Sauce Labs Backpack"
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
  "duration": 5606844300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 44067100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5405486600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 493916100,
  "status": "passed"
});
formatter.after({
  "duration": 652523100,
  "status": "passed"
});
formatter.after({
  "duration": 31400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 242,
      "value": "###Test Scenario 16"
    }
  ],
  "line": 244,
  "name": "checkout without product on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-product-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 243,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 246,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 247,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 250,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-product-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 251,
      "id": "sauce-demo-application-testing-feature;checkout-without-product-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 252,
      "id": "sauce-demo-application-testing-feature;checkout-without-product-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 253,
      "id": "sauce-demo-application-testing-feature;checkout-without-product-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34900,
  "status": "passed"
});
formatter.before({
  "duration": 4022845000,
  "status": "passed"
});
formatter.scenario({
  "line": 252,
  "name": "checkout without product on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-product-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 243,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 246,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 247,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "user checkout product from cart",
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
  "duration": 620492900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 134027000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 297886700,
  "status": "passed"
});
formatter.after({
  "duration": 597712000,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 37800,
  "status": "passed"
});
formatter.before({
  "duration": 2011609300,
  "status": "passed"
});
formatter.scenario({
  "line": 253,
  "name": "checkout without product on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-product-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 243,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 246,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 247,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "user checkout product from cart",
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
  "duration": 5526821100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 46571700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 441813300,
  "status": "passed"
});
formatter.after({
  "duration": 680442600,
  "status": "passed"
});
formatter.after({
  "duration": 35200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 255,
      "value": "###Test Scenario 17"
    }
  ],
  "line": 257,
  "name": "Checkout without buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 256,
      "name": "@negativescenario"
    },
    {
      "line": 256,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 259,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 260,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 261,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 262
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 263
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 264,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 265,
  "name": "user tries to checkout product from cart without buyer data",
  "keyword": "Then "
});
formatter.examples({
  "line": 267,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 268,
      "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 269,
      "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 270,
      "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34600,
  "status": "passed"
});
formatter.before({
  "duration": 2082928900,
  "status": "passed"
});
formatter.scenario({
  "line": 269,
  "name": "Checkout without buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 256,
      "name": "@checkout"
    },
    {
      "line": 256,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 259,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 260,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 261,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 262
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 263
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 264,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 265,
  "name": "user tries to checkout product from cart without buyer data",
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
  "duration": 493834500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 57035000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 657062900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 319187100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_tries_to_checkout_product_from_cart_without_buyer_data()"
});
formatter.result({
  "duration": 470212200,
  "status": "passed"
});
formatter.after({
  "duration": 590031200,
  "status": "passed"
});
formatter.after({
  "duration": 32800,
  "status": "passed"
});
formatter.before({
  "duration": 62100,
  "status": "passed"
});
formatter.before({
  "duration": 1974940300,
  "status": "passed"
});
formatter.scenario({
  "line": 270,
  "name": "Checkout without buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-without-buyer-data-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 256,
      "name": "@checkout"
    },
    {
      "line": 256,
      "name": "@negativescenario"
    }
  ]
});
formatter.step({
  "line": 259,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 260,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 261,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 262
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 263
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 264,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 265,
  "name": "user tries to checkout product from cart without buyer data",
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
  "duration": 5550587100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 52975900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5555343800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 396972200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_tries_to_checkout_product_from_cart_without_buyer_data()"
});
formatter.result({
  "duration": 455416700,
  "status": "passed"
});
formatter.after({
  "duration": 605609500,
  "status": "passed"
});
formatter.after({
  "duration": 32500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 272,
      "value": "###Test Scenario 18"
    }
  ],
  "line": 274,
  "name": "Cancel Checkout process on Your Information Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 273,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 276,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 277,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 278,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 279
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 280
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 281,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 282,
  "name": "user cancels checkout process",
  "keyword": "Then "
});
formatter.examples({
  "line": 284,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 285,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 286,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 287,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34200,
  "status": "passed"
});
formatter.before({
  "duration": 2011529400,
  "status": "passed"
});
formatter.scenario({
  "line": 286,
  "name": "Cancel Checkout process on Your Information Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 273,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 276,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 277,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 278,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 279
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 280
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 281,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 282,
  "name": "user cancels checkout process",
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
  "duration": 511331500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 46095600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 527404500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 389572500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 163102000,
  "status": "passed"
});
formatter.after({
  "duration": 645039300,
  "status": "passed"
});
formatter.after({
  "duration": 33500,
  "status": "passed"
});
formatter.before({
  "duration": 34800,
  "status": "passed"
});
formatter.before({
  "duration": 2026597900,
  "status": "passed"
});
formatter.scenario({
  "line": 287,
  "name": "Cancel Checkout process on Your Information Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-your-information-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 273,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 276,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 277,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 278,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 279
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 280
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 281,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 282,
  "name": "user cancels checkout process",
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
  "duration": 5548327500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 74321100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5495413300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 464831700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 129238400,
  "status": "passed"
});
formatter.after({
  "duration": 587756300,
  "status": "passed"
});
formatter.after({
  "duration": 33000,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 289,
      "value": "###Test Scenario 19"
    }
  ],
  "line": 291,
  "name": "Checkout with buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 290,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 293,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 294,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 295,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 296
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 297
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 298,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 299,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.examples({
  "line": 301,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 302,
      "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 303,
      "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 304,
      "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36100,
  "status": "passed"
});
formatter.before({
  "duration": 2064443000,
  "status": "passed"
});
formatter.scenario({
  "line": 303,
  "name": "Checkout with buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 290,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 293,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 294,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 295,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 296
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 297
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 298,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 299,
  "name": "user continue checkout with buyer data",
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
  "duration": 742023400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 54482000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 413290100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 388707700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 479238400,
  "status": "passed"
});
formatter.after({
  "duration": 606344100,
  "status": "passed"
});
formatter.after({
  "duration": 32600,
  "status": "passed"
});
formatter.before({
  "duration": 35000,
  "status": "passed"
});
formatter.before({
  "duration": 2075759700,
  "status": "passed"
});
formatter.scenario({
  "line": 304,
  "name": "Checkout with buyer data on Cart Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;checkout-with-buyer-data-on-cart-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 290,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 293,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 294,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 295,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 296
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 297
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 298,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 299,
  "name": "user continue checkout with buyer data",
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
  "duration": 5581929700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 46447000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5548132700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 501714800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 420458700,
  "status": "passed"
});
formatter.after({
  "duration": 606016800,
  "status": "passed"
});
formatter.after({
  "duration": 819400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 306,
      "value": "###Test Scenario 20"
    }
  ],
  "line": 308,
  "name": "Cancel Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 307,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 310,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 311,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 312,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 313
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 314
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 315,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "user cancels checkout process",
  "keyword": "Then "
});
formatter.examples({
  "line": 319,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 320,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 321,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 322,
      "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.before({
  "duration": 2026772300,
  "status": "passed"
});
formatter.scenario({
  "line": 321,
  "name": "Cancel Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 307,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 310,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 311,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 312,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 313
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 314
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 315,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "user cancels checkout process",
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
  "duration": 517402300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 76288200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 533310500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 360712000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 491576000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 159991100,
  "status": "passed"
});
formatter.after({
  "duration": 613742600,
  "status": "passed"
});
formatter.after({
  "duration": 32200,
  "status": "passed"
});
formatter.before({
  "duration": 35000,
  "status": "passed"
});
formatter.before({
  "duration": 1919767800,
  "status": "passed"
});
formatter.scenario({
  "line": 322,
  "name": "Cancel Checkout process on Overview Page",
  "description": "",
  "id": "sauce-demo-application-testing-feature;cancel-checkout-process-on-overview-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 307,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 310,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 311,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 312,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 313
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 314
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 315,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "user cancels checkout process",
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
  "duration": 5874692900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 223496800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5409549700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 410727800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 458503500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 5176072700,
  "status": "passed"
});
formatter.after({
  "duration": 615139800,
  "status": "passed"
});
formatter.after({
  "duration": 31100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 324,
      "value": "###Test Scenario 21"
    }
  ],
  "line": 326,
  "name": "Finish Checkout process without product",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 325,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 328,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 329,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 330,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 332,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "user clicks on logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 335,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 336,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 337,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 338,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38500,
  "status": "passed"
});
formatter.before({
  "duration": 1956810000,
  "status": "passed"
});
formatter.scenario({
  "line": 337,
  "name": "Finish Checkout process without product",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 325,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 328,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 329,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 330,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 332,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "user clicks on logout",
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
  "duration": 488469900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 94705700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 381411900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 436667900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 196272900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 246625700,
  "status": "passed"
});
formatter.after({
  "duration": 596539900,
  "status": "passed"
});
formatter.after({
  "duration": 30400,
  "status": "passed"
});
formatter.before({
  "duration": 39000,
  "status": "passed"
});
formatter.before({
  "duration": 2079727900,
  "status": "passed"
});
formatter.scenario({
  "line": 338,
  "name": "Finish Checkout process without product",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-without-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 325,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 328,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 329,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 330,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 332,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "user clicks on logout",
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
  "duration": 5577989400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 51233200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 433784800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 526321700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 277964200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 379606000,
  "status": "passed"
});
formatter.after({
  "duration": 751342000,
  "status": "passed"
});
formatter.after({
  "duration": 33400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 340,
      "value": "###Test Scenario 22"
    }
  ],
  "line": 342,
  "name": "Finish Checkout process with products",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-with-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 341,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 344,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and clicks on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 345,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 346,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 347
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 348
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 349
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 350
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 351
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 352
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 353
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 354,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 355,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 356,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.step({
  "line": 357,
  "name": "user clicks on logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 359,
  "name": "",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-with-products;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 360,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-with-products;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 361,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-with-products;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 362,
      "id": "sauce-demo-application-testing-feature;finish-checkout-process-with-products;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 53100,
  "status": "passed"
});
formatter.before({
  "duration": 1970803900,
  "status": "passed"
});
formatter.scenario({
  "line": 361,
  "name": "Finish Checkout process with products",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-with-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 341,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 344,
  "name": "user enters \"standard_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 345,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 346,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 347
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 348
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 349
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 350
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 351
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 352
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 353
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 354,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 355,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 356,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.step({
  "line": 357,
  "name": "user clicks on logout",
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
  "duration": 739996400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 72556100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1239622000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 430381900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 604624100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 237861800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 288761400,
  "status": "passed"
});
formatter.after({
  "duration": 601602000,
  "status": "passed"
});
formatter.after({
  "duration": 31200,
  "status": "passed"
});
formatter.before({
  "duration": 35400,
  "status": "passed"
});
formatter.before({
  "duration": 3903993400,
  "status": "passed"
});
formatter.scenario({
  "line": 362,
  "name": "Finish Checkout process with products",
  "description": "",
  "id": "sauce-demo-application-testing-feature;finish-checkout-process-with-products;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 341,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 344,
  "name": "user enters \"performance_glitch_user\" and \"secret_sauce\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 345,
  "name": "user is on swag labs home page",
  "keyword": "When "
});
formatter.step({
  "line": 346,
  "name": "user adds product from home page",
  "rows": [
    {
      "cells": [
        "productname"
      ],
      "line": 347
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 348
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ],
      "line": 349
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ],
      "line": 350
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ],
      "line": 351
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ],
      "line": 352
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 353
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 354,
  "name": "user checkout product from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 355,
  "name": "user continue checkout with buyer data",
  "keyword": "Then "
});
formatter.step({
  "line": 356,
  "name": "user finish checkout process",
  "keyword": "Then "
});
formatter.step({
  "line": 357,
  "name": "user clicks on logout",
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
  "duration": 5521196500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 48624600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 6319072900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 479176900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 440071100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 194664900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 251105600,
  "status": "passed"
});
formatter.after({
  "duration": 591520700,
  "status": "passed"
});
formatter.after({
  "duration": 31600,
  "status": "passed"
});
});