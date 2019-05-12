jQuery("#simulation")
  .on("click", ".s-09023ee2-9c9d-44f7-b864-ca3016d0d46d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ea0d2ec4-7066-427c-b19d-cb6b413eb64c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_1 span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_51 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_50 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_52 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_11 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_4 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_8 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_2 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_2 span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_51 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_50 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_52 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_11 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_4 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_8 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_1 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_50 > svg": {
                      "attributes": {
                        "overlay": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_4 span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_51 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_52 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_11 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_8 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_1 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_2 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_51")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_51 > svg": {
                      "attributes": {
                        "overlay": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_8 span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_50 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_52 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_11 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_4 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_1 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_2 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_52")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_52 > svg": {
                      "attributes": {
                        "overlay": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_11 span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_51 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Image_50 > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_4 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_8 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_1 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Label_2 span": {
                      "attributes": {
                        "color": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Modal")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-265"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Home_Indicator > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Home_Indicator": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Home_Indicator": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-09023ee2-9c9d-44f7-b864-ca3016d0d46d #s-Home_Indicator": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-09023ee2-9c9d-44f7-b864-ca3016d0d46d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });