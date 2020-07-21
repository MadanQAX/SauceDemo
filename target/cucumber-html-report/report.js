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
  "duration": 411600,
  "status": "passed"
});
formatter.before({
  "duration": 3763509600,
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
  "duration": 699508600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 44511800,
  "status": "passed"
});
formatter.after({
  "duration": 543977800,
  "status": "passed"
});
formatter.after({
  "duration": 54700,
  "status": "passed"
});
formatter.before({
  "duration": 119400,
  "status": "passed"
});
formatter.before({
  "duration": 2967458800,
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
  "duration": 434547800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 36293400,
  "status": "passed"
});
formatter.after({
  "duration": 543921000,
  "status": "passed"
});
formatter.after({
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 32600,
  "status": "passed"
});
formatter.before({
  "duration": 2844066500,
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
  "duration": 5502840400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_home_page_and_check_for_products()"
});
formatter.result({
  "duration": 238576000,
  "status": "passed"
});
formatter.after({
  "duration": 542095000,
  "status": "passed"
});
formatter.after({
  "duration": 48700,
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
  "duration": 43900,
  "status": "passed"
});
formatter.before({
  "duration": 2869727800,
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
  "duration": 316391600,
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
  "duration": 51027000,
  "status": "passed"
});
formatter.after({
  "duration": 537426900,
  "status": "passed"
});
formatter.after({
  "duration": 39100,
  "status": "passed"
});
formatter.before({
  "duration": 34300,
  "status": "passed"
});
formatter.before({
  "duration": 1334055600,
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
  "duration": 315882700,
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
  "duration": 55415300,
  "status": "passed"
});
formatter.after({
  "duration": 549157800,
  "status": "passed"
});
formatter.after({
  "duration": 45000,
  "status": "passed"
});
formatter.before({
  "duration": 70900,
  "status": "passed"
});
formatter.before({
  "duration": 2934089600,
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
  "duration": 330034900,
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
  "duration": 49778000,
  "status": "passed"
});
formatter.after({
  "duration": 536640000,
  "status": "passed"
});
formatter.after({
  "duration": 176700,
  "status": "passed"
});
formatter.before({
  "duration": 46400,
  "status": "passed"
});
formatter.before({
  "duration": 2879702300,
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
  "duration": 271444400,
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
  "duration": 49071000,
  "status": "passed"
});
formatter.after({
  "duration": 535018500,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.before({
  "duration": 79600,
  "status": "passed"
});
formatter.before({
  "duration": 2877546300,
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
  "duration": 238903200,
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
  "duration": 50343100,
  "status": "passed"
});
formatter.after({
  "duration": 542868900,
  "status": "passed"
});
formatter.after({
  "duration": 41800,
  "status": "passed"
});
formatter.before({
  "duration": 47200,
  "status": "passed"
});
formatter.before({
  "duration": 2895917200,
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
  "duration": 241341900,
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
  "duration": 46592200,
  "status": "passed"
});
formatter.after({
  "duration": 536257000,
  "status": "passed"
});
formatter.after({
  "duration": 35400,
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
  "duration": 56300,
  "status": "passed"
});
formatter.before({
  "duration": 2840016000,
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
  "duration": 430589700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 39294700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 488785700,
  "status": "passed"
});
formatter.after({
  "duration": 543937800,
  "status": "passed"
});
formatter.after({
  "duration": 42100,
  "status": "passed"
});
formatter.before({
  "duration": 52600,
  "status": "passed"
});
formatter.before({
  "duration": 2863878300,
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
  "duration": 5496365300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 51905900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_products_on_home_page()"
});
formatter.result({
  "duration": 490319800,
  "status": "passed"
});
formatter.after({
  "duration": 549325100,
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
  "duration": 35400,
  "status": "passed"
});
formatter.before({
  "duration": 1296510100,
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
  "duration": 410333400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41607800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 704545500,
  "status": "passed"
});
formatter.after({
  "duration": 544244200,
  "status": "passed"
});
formatter.after({
  "duration": 121800,
  "status": "passed"
});
formatter.before({
  "duration": 73000,
  "status": "passed"
});
formatter.before({
  "duration": 2850887800,
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
  "duration": 5471992000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40080700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_can_sort_products(DataTable)"
});
formatter.result({
  "duration": 690719500,
  "status": "passed"
});
formatter.after({
  "duration": 543170100,
  "status": "passed"
});
formatter.after({
  "duration": 39000,
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
  "duration": 73000,
  "status": "passed"
});
formatter.before({
  "duration": 1352370800,
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
  "duration": 447249300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 42314000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_all_items()"
});
formatter.result({
  "duration": 454370200,
  "status": "passed"
});
formatter.after({
  "duration": 537006200,
  "status": "passed"
});
formatter.after({
  "duration": 38300,
  "status": "passed"
});
formatter.before({
  "duration": 79800,
  "status": "passed"
});
formatter.before({
  "duration": 2830779300,
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
  "duration": 5467300300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40390000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_all_items()"
});
formatter.result({
  "duration": 5463233900,
  "status": "passed"
});
formatter.after({
  "duration": 540382000,
  "status": "passed"
});
formatter.after({
  "duration": 42900,
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
  "duration": 499600,
  "status": "passed"
});
formatter.before({
  "duration": 2841792400,
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
  "duration": 403898600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 42954800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_about()"
});
formatter.result({
  "duration": 2533970800,
  "status": "passed"
});
formatter.after({
  "duration": 544472300,
  "status": "passed"
});
formatter.after({
  "duration": 359100,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.before({
  "duration": 2836342700,
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
  "duration": 5458690000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 45843700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_about()"
});
formatter.result({
  "duration": 7714274600,
  "status": "passed"
});
formatter.after({
  "duration": 552775200,
  "status": "passed"
});
formatter.after({
  "duration": 54100,
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
  "duration": 40400,
  "status": "passed"
});
formatter.before({
  "duration": 2859631200,
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
  "duration": 650504700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 50212100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on__Reset_App_State()"
});
formatter.result({
  "duration": 359733600,
  "status": "passed"
});
formatter.after({
  "duration": 540553900,
  "status": "passed"
});
formatter.after({
  "duration": 35800,
  "status": "passed"
});
formatter.before({
  "duration": 36700,
  "status": "passed"
});
formatter.before({
  "duration": 2843530200,
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
  "duration": 5477436200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 42470500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on__Reset_App_State()"
});
formatter.result({
  "duration": 408733500,
  "status": "passed"
});
formatter.after({
  "duration": 550906200,
  "status": "passed"
});
formatter.after({
  "duration": 35300,
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
  "duration": 62300,
  "status": "passed"
});
formatter.before({
  "duration": 2883802700,
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
  "duration": 431986400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 42470800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 396196500,
  "status": "passed"
});
formatter.after({
  "duration": 549453100,
  "status": "passed"
});
formatter.after({
  "duration": 38400,
  "status": "passed"
});
formatter.before({
  "duration": 46500,
  "status": "passed"
});
formatter.before({
  "duration": 2871272100,
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
  "duration": 5936928600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 39077800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 399247400,
  "status": "passed"
});
formatter.after({
  "duration": 539183700,
  "status": "passed"
});
formatter.after({
  "duration": 37900,
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
  "duration": 67700,
  "status": "passed"
});
formatter.before({
  "duration": 2829178200,
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
  "duration": 600936600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40775700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 659570600,
  "status": "passed"
});
formatter.after({
  "duration": 538570700,
  "status": "passed"
});
formatter.after({
  "duration": 37800,
  "status": "passed"
});
formatter.before({
  "duration": 41200,
  "status": "passed"
});
formatter.before({
  "duration": 2858539400,
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
  "duration": 5560037000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 42602500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5634350700,
  "status": "passed"
});
formatter.after({
  "duration": 558104300,
  "status": "passed"
});
formatter.after({
  "duration": 38100,
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
  "duration": 63200,
  "status": "passed"
});
formatter.before({
  "duration": 2863076900,
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
  "duration": 538949000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40065500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 452215000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_on_home_page(DataTable)"
});
formatter.result({
  "duration": 207714100,
  "status": "passed"
});
formatter.after({
  "duration": 541927800,
  "status": "passed"
});
formatter.after({
  "duration": 39000,
  "status": "passed"
});
formatter.before({
  "duration": 40900,
  "status": "passed"
});
formatter.before({
  "duration": 2842237900,
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
  "duration": 5534539500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 47269900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5449163900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_product_on_home_page(DataTable)"
});
formatter.result({
  "duration": 224584800,
  "status": "passed"
});
formatter.after({
  "duration": 610027700,
  "status": "passed"
});
formatter.after({
  "duration": 34300,
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
    },
    {
      "line": 153,
      "name": "@test"
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
  "duration": 67900,
  "status": "passed"
});
formatter.before({
  "duration": 2900409500,
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
    },
    {
      "line": 153,
      "name": "@test"
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
  "duration": 455228000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41373100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 2461019200,
  "status": "passed"
});
formatter.after({
  "duration": 544703800,
  "status": "passed"
});
formatter.after({
  "duration": 134300,
  "status": "passed"
});
formatter.before({
  "duration": 68300,
  "status": "passed"
});
formatter.before({
  "duration": 2875918900,
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
    },
    {
      "line": 153,
      "name": "@test"
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
  "duration": 5464599700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 66908200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 32961161500,
  "status": "passed"
});
formatter.after({
  "duration": 558357800,
  "status": "passed"
});
formatter.after({
  "duration": 49700,
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
  "duration": 45900,
  "status": "passed"
});
formatter.before({
  "duration": 2854150500,
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
  "duration": 427315900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40639100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 901365200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 678945500,
  "status": "passed"
});
formatter.after({
  "duration": 657174400,
  "status": "passed"
});
formatter.after({
  "duration": 60500,
  "status": "passed"
});
formatter.before({
  "duration": 64500,
  "status": "passed"
});
formatter.before({
  "duration": 2909013200,
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
  "duration": 5493939400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 43661600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_adds_product_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 10881098600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_product_details_page(DataTable)"
});
formatter.result({
  "duration": 10746180100,
  "status": "passed"
});
formatter.after({
  "duration": 540000400,
  "status": "passed"
});
formatter.after({
  "duration": 43400,
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
  "duration": 38800,
  "status": "passed"
});
formatter.before({
  "duration": 2834326700,
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
  "duration": 435138700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 39687400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 546574300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_cart(DataTable)"
});
formatter.result({
  "duration": 284534000,
  "status": "passed"
});
formatter.after({
  "duration": 544904900,
  "status": "passed"
});
formatter.after({
  "duration": 115700,
  "status": "passed"
});
formatter.before({
  "duration": 77200,
  "status": "passed"
});
formatter.before({
  "duration": 2839837700,
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
  "duration": 5519148300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 210827200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5389823700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_removes_products_from_cart(DataTable)"
});
formatter.result({
  "duration": 332547400,
  "status": "passed"
});
formatter.after({
  "duration": 539138300,
  "status": "passed"
});
formatter.after({
  "duration": 42700,
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
  "duration": 72500,
  "status": "passed"
});
formatter.before({
  "duration": 2844824500,
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
  "duration": 615706900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41794400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 460228200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 362500500,
  "status": "passed"
});
formatter.after({
  "duration": 540348000,
  "status": "passed"
});
formatter.after({
  "duration": 46200,
  "status": "passed"
});
formatter.before({
  "duration": 71000,
  "status": "passed"
});
formatter.before({
  "duration": 2829301500,
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
  "duration": 5486837600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41797300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5499955300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_shopping_from_cart()"
});
formatter.result({
  "duration": 5399767600,
  "status": "passed"
});
formatter.after({
  "duration": 549968300,
  "status": "passed"
});
formatter.after({
  "duration": 41600,
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
  "duration": 70600,
  "status": "passed"
});
formatter.before({
  "duration": 2876750400,
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
  "duration": 417347500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 43539100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 582481300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 310819200,
  "status": "passed"
});
formatter.after({
  "duration": 549671400,
  "status": "passed"
});
formatter.after({
  "duration": 41400,
  "status": "passed"
});
formatter.before({
  "duration": 44400,
  "status": "passed"
});
formatter.before({
  "duration": 2839233600,
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
  "duration": 5484748000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 68860100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5463194000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 359795000,
  "status": "passed"
});
formatter.after({
  "duration": 539522400,
  "status": "passed"
});
formatter.after({
  "duration": 41300,
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
  "duration": 45800,
  "status": "passed"
});
formatter.before({
  "duration": 2874554400,
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
  "duration": 618281500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 42841200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 289579800,
  "status": "passed"
});
formatter.after({
  "duration": 539106400,
  "status": "passed"
});
formatter.after({
  "duration": 38900,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
  "status": "passed"
});
formatter.before({
  "duration": 2855425500,
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
  "duration": 5478671900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41724000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 331785600,
  "status": "passed"
});
formatter.after({
  "duration": 539689900,
  "status": "passed"
});
formatter.after({
  "duration": 41500,
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
  "duration": 45400,
  "status": "passed"
});
formatter.before({
  "duration": 2920448400,
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
  "duration": 544748900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 44679900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 392874100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 411967000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_tries_to_checkout_product_from_cart_without_buyer_data()"
});
formatter.result({
  "duration": 442987700,
  "status": "passed"
});
formatter.after({
  "duration": 543326300,
  "status": "passed"
});
formatter.after({
  "duration": 41800,
  "status": "passed"
});
formatter.before({
  "duration": 46700,
  "status": "passed"
});
formatter.before({
  "duration": 2855344800,
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
  "duration": 5481418700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 39946200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5502145100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 360056100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_tries_to_checkout_product_from_cart_without_buyer_data()"
});
formatter.result({
  "duration": 437469700,
  "status": "passed"
});
formatter.after({
  "duration": 574609800,
  "status": "passed"
});
formatter.after({
  "duration": 41200,
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
  "duration": 43200,
  "status": "passed"
});
formatter.before({
  "duration": 1356901600,
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
  "duration": 401505400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 248134400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 437941500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 318490700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 82083200,
  "status": "passed"
});
formatter.after({
  "duration": 541249600,
  "status": "passed"
});
formatter.after({
  "duration": 39100,
  "status": "passed"
});
formatter.before({
  "duration": 42800,
  "status": "passed"
});
formatter.before({
  "duration": 2880242600,
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
  "duration": 5543673800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 38803800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5453757900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 365112300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 82545800,
  "status": "passed"
});
formatter.after({
  "duration": 537599100,
  "status": "passed"
});
formatter.after({
  "duration": 39900,
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
  "duration": 41500,
  "status": "passed"
});
formatter.before({
  "duration": 2886952800,
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
  "duration": 409089300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 40870400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 479214400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 367112900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 396911800,
  "status": "passed"
});
formatter.after({
  "duration": 543035500,
  "status": "passed"
});
formatter.after({
  "duration": 95800,
  "status": "passed"
});
formatter.before({
  "duration": 61900,
  "status": "passed"
});
formatter.before({
  "duration": 2860331000,
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
  "duration": 5490713200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 48388800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5498760900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 360800900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 487298600,
  "status": "passed"
});
formatter.after({
  "duration": 537958600,
  "status": "passed"
});
formatter.after({
  "duration": 39200,
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
  "duration": 61000,
  "status": "passed"
});
formatter.before({
  "duration": 2883606700,
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
  "duration": 434478200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41796000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 471203200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 357337600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 400989900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 95942400,
  "status": "passed"
});
formatter.after({
  "duration": 541622300,
  "status": "passed"
});
formatter.after({
  "duration": 39000,
  "status": "passed"
});
formatter.before({
  "duration": 74500,
  "status": "passed"
});
formatter.before({
  "duration": 2867427000,
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
  "duration": 5462714600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 51681400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 5572215900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 355975700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 412144200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_cancels_checkout_process()"
});
formatter.result({
  "duration": 5136186800,
  "status": "passed"
});
formatter.after({
  "duration": 545988400,
  "status": "passed"
});
formatter.after({
  "duration": 42000,
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
  "duration": 70500,
  "status": "passed"
});
formatter.before({
  "duration": 2876417700,
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
  "duration": 414442300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 39668900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 405103000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 414524100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 155008900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 223904600,
  "status": "passed"
});
formatter.after({
  "duration": 540479400,
  "status": "passed"
});
formatter.after({
  "duration": 94500,
  "status": "passed"
});
formatter.before({
  "duration": 60300,
  "status": "passed"
});
formatter.before({
  "duration": 2860396800,
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
  "duration": 5456073900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 222792100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 198843200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 391563700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 156341200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 199738700,
  "status": "passed"
});
formatter.after({
  "duration": 541451500,
  "status": "passed"
});
formatter.after({
  "duration": 38300,
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
  "duration": 60900,
  "status": "passed"
});
formatter.before({
  "duration": 2880771800,
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
  "duration": 537456200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 46509100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 1108735700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 281409700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 408785300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 148292100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 245486500,
  "status": "passed"
});
formatter.after({
  "duration": 601747900,
  "status": "passed"
});
formatter.after({
  "duration": 105100,
  "status": "passed"
});
formatter.before({
  "duration": 64000,
  "status": "passed"
});
formatter.before({
  "duration": 2916347400,
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
  "duration": 5514522400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_is_on_swag_labs_home_page_()"
});
formatter.result({
  "duration": 41917200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.verify_user_adds_product_from_home_page(DataTable)"
});
formatter.result({
  "duration": 6099504600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_checkout_product_from_cart()"
});
formatter.result({
  "duration": 382410100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_continue_checkout_with_buyer_data()"
});
formatter.result({
  "duration": 419804300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_finish_checkout_process()"
});
formatter.result({
  "duration": 145572500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoStepDefinition.user_clicks_on_logout()"
});
formatter.result({
  "duration": 211430100,
  "status": "passed"
});
formatter.after({
  "duration": 540142200,
  "status": "passed"
});
formatter.after({
  "duration": 36600,
  "status": "passed"
});
});