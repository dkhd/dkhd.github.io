// What you are going to is a code full of promise hell
// I know, I know..
//  I just haven't optimized it yet

var botui = new BotUI('bot');

var DATA = {};

var start = function () {

    botui.message.bot({
        delay: 1000,
        content: "Hello! 🖐😁"
    })
        .then(() => {
            botui.message.bot({
                delay: 1000,
                content: "I'm <strong>Diky Hadna</strong>",
                type: "html"
            })
                .then(() => {
                    botui.message.bot({
                        delay: 1000,
                        content: "And I am a <strong>chatbot developer</strong> 🛠",
                        type: "html"
                    })
                        .then(() => {
                            botui.message.bot({
                                delay: 1000,
                                content: "How may I address you?"
                            })
                                .then(() => {
                                    let name = ""
                                    if (typeof (Storage) !== "undefined") {
                                        name = localStorage.name;
                                    } else {
                                    }
                                    return botui.action.text({
                                        delay: 1000,
                                        addMessage: false,
                                        action: {
                                            size: 30,
                                            icon: "quote-right",
                                            value: name,
                                            placeholder: "Your name here please 😊"
                                        }
                                    })
                                        .then((res) => {
                                            if (typeof (Storage) !== "undefined") {
                                                localStorage.name = res.value;
                                            } else {
                                            }
                                            DATA.name = res.value
                                            botui.message.human({
                                                // delay: 1000,
                                                content: `My name is ${DATA.name}`
                                            })
                                                .then(() => {

                                                    botui.message.bot({
                                                        delay: 1000,
                                                        content: `Oh hi, <strong>${DATA.name}</strong>!`,
                                                        type: "html"
                                                    })
                                                        .then(() => {
                                                            botui.message.bot({
                                                                delay: 1000,
                                                                content: "Thank's for passing by!"
                                                            })
                                                                .then(() => {
                                                                    return botui.action.button({
                                                                        delay: 1000,
                                                                        addMessage: false,
                                                                        action: [
                                                                            {
                                                                                text: "Why chatbots matter? 🤔",
                                                                                value: "postback_why_chatbot"
                                                                            },
                                                                            {
                                                                                text: "Go ahead 👍",
                                                                                value: "postback_ok_go_on"
                                                                            }
                                                                        ]
                                                                    })
                                                                        .then((res) => {
                                                                            if (res.value === "postback_why_chatbot") {
                                                                                botui.message.human({
                                                                                    // delay:1000,
                                                                                    content: "Tell me why I should have a chatbot"
                                                                                })
                                                                                    .then(() => {
                                                                                        botui.message.human({
                                                                                            delay: 1000,
                                                                                            content: "Is chatbot any good?"
                                                                                        })
                                                                                            .then(() => {
                                                                                                why_chatbot();
                                                                                            })
                                                                                    })
                                                                            } else if (res.value === "postback_ok_go_on") {
                                                                                botui.message.human({
                                                                                    content: "No problem"
                                                                                })
                                                                                    .then(() => {
                                                                                        botui.message.human({
                                                                                            delay: 1000,
                                                                                            content: "Go on.."
                                                                                        })
                                                                                            .then(() => {
                                                                                                go_on();
                                                                                            })
                                                                                    })
                                                                            }
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })

};


const why_chatbot = function () {
    botui.message.bot({
        delay: 1000,
        content: "Nice question 👍"
    })
        .then(() => {
            botui.message.bot({
                delay: 1500,
                content: "Chat apps have become a part of our modern life"
            })
                .then(() => {
                    botui.message.bot({
                        delay: 2000,
                        content: "I mean, who doesn't use it, right? 🤔"
                    })
                        .then(() => {
                            botui.message.bot({
                                delay: 2000,
                                content: "Facebook Messenger, WhatsApp, Skype, Telegram, Slack, Viber, you name it"
                            })
                                .then(() => {
                                    botui.message.bot({
                                        delay: 2000,
                                        content: "And I'm pretty sure you use at least one of them"
                                    })
                                        .then(() => {
                                            botui.message.bot({
                                                delay: 2000,
                                                type: "html",
                                                content: "Referring to <a href='https://www.statista.com/statistics/258749/most-popular-global-mobile-messenger-apps/' target='_blank'>this article</a> there are more than <strong>1.5 billions</strong> of active messaging apps users per month"
                                            })
                                                .then(() => {
                                                    botui.message.bot({
                                                        delay: 2000,
                                                        content: "That's a very big number! 😨"
                                                    })
                                                        .then(() => {
                                                            botui.message.bot({
                                                                delay: 2000,
                                                                type: "embed",
                                                                content: "https://giphy.com/embed/PUBxelwT57jsQ"
                                                            })
                                                                .then(() => {
                                                                    botui.message.bot({
                                                                        delay: 2000,
                                                                        content: "Now imagine that 0.1% of the number is yours 🤔"
                                                                    })
                                                                        .then(() => {
                                                                            botui.message.bot({
                                                                                delay: 2000,
                                                                                content: "Amazing, isn't it?"
                                                                            })
                                                                                .then(() => {
                                                                                    botui.message.bot({
                                                                                        delay: 2000,
                                                                                        content: "It is also known that a chatbot gives a lot of benefits to the company"
                                                                                    })
                                                                                        .then(() => {
                                                                                            botui.message.bot({
                                                                                                delay: 2000,
                                                                                                content: "And chatbot provides unique experiences for your customers as well"
                                                                                            })
                                                                                                .then(() => {
                                                                                                    return botui.action.button({
                                                                                                        delay: 1000,
                                                                                                        addMessage: false,
                                                                                                        action: [
                                                                                                            {
                                                                                                                text: "Interesting 🤔",
                                                                                                                value: "postback_interesting"
                                                                                                            },
                                                                                                            {
                                                                                                                text: "Any example? 🤨",
                                                                                                                value: "postback_chatbot_usage"
                                                                                                            }
                                                                                                        ]
                                                                                                    })
                                                                                                        .then((res) => {
                                                                                                            if (res.value === "postback_interesting") {
                                                                                                                botui.message.human({
                                                                                                                    // delay: 1500,
                                                                                                                    content: "Hmm.. That is something I didn't realize before"
                                                                                                                })
                                                                                                                    .then(() => {
                                                                                                                        botui.message.human({
                                                                                                                            delay: 1500,
                                                                                                                            content: "Actually, that's amazing"
                                                                                                                        })
                                                                                                                            .then(() => {
                                                                                                                                thats_interesting();
                                                                                                                            })
                                                                                                                    })
                                                                                                            } else if (res.value === "postback_chatbot_usage") {
                                                                                                                botui.message.human({
                                                                                                                    // delay: 1500,
                                                                                                                    content: "That's awesome"
                                                                                                                })
                                                                                                                    .then(() => {
                                                                                                                        botui.message.human({
                                                                                                                            delay: 1500,
                                                                                                                            content: "Is there any good chatbot usage examples?"
                                                                                                                        })
                                                                                                                            .then(() => {
                                                                                                                                show_examples();
                                                                                                                            })
                                                                                                                    })
                                                                                                            }
                                                                                                        })
                                                                                                })
                                                                                        })
                                                                                })
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
};

const go_on = function () {
    botui.message.bot({
        delay: 1500,
        content: "Thank you!"
    })
        .then(() => {
            botui.message.bot({
                delay: 1500,
                content: "I appreciate it 👍"
            })
                .then(() => {
                    botui.message.bot({
                        delay: 1500,
                        content: "I can help you to build your customized chatbot"
                    })
                        .then(() => {
                            botui.message.bot({
                                delay: 1500,
                                content: "The chatbot that suits your needs and helps you to get things done"
                            })
                                .then(() => {
                                    botui.message.bot({
                                        delay: 1500,
                                        content: "You can share your idea, and we'll make the best of it"
                                    })
                                        .then(() => {
                                            return botui.action.button({
                                                delay: 1000,
                                                addMessage: false,
                                                action: [
                                                    {
                                                        text: "But why chatbot? 🤔",
                                                        value: "postback_why_chatbot"
                                                    },
                                                    {
                                                        text: "How do I reach you? 📱",
                                                        value: "postback_contact"
                                                    }
                                                ]
                                            })
                                                .then((res) => {
                                                    if (res.value === "postback_why_chatbot") {
                                                        botui.message.human({
                                                            // delay:1000,
                                                            content: "Tell me why I should have a chatbot"
                                                        })
                                                            .then(() => {
                                                                botui.message.human({
                                                                    delay: 1500,
                                                                    content: "Is chatbot any good?"
                                                                })
                                                                    .then(() => {
                                                                        why_chatbot();
                                                                    })
                                                            })
                                                    } else if (res.value === "postback_contact") {
                                                        botui.message.human({
                                                            // delay:1000,
                                                            content: "Ok I see"
                                                        })
                                                            .then(() => {
                                                                botui.message.human({
                                                                    delay: 1500,
                                                                    content: "How do I contact you then?"
                                                                })
                                                                    .then(() => {
                                                                        contact();
                                                                    })
                                                            })
                                                    }
                                                })
                                        })
                                })
                        })
                })
        })
};

const contact = function () {
    botui.message.bot({
        delay: 1500,
        content: "Thank you for your interest"
    })
        .then(() => {
            botui.message.bot({
                delay: 1500,
                content: "To get in touch with me is easy"
            })
                .then(() => {
                    botui.message.bot({
                        delay: 1500,
                        content: "You can always send me an email to <a href='mailto:dikyhd@gmail.com'>dikyhd@gmail.com</a> or you can also reach me <a href='https://linkedin.com/in/dikyhadna' target='_blank'>on my LinkedIn</a>",
                        type: "html"
                    })
                        .then(() => {
                            botui.message.bot({
                                delay: 1500,
                                content: "And I'll be glad to help you solve the problems"
                            })
                                .then(() => {
                                    botui.message.bot({
                                        delay: 1500,
                                        content: "I also write articles on <a href='https://medium.com/@dkhd' target='_blank'>my Medium</a>, in case you love to read as well",
                                        type: "html"
                                    })
                                        .then(() => {
                                            return botui.action.button({
                                                delay: 1500,
                                                addMessage: false,
                                                action: [
                                                    {
                                                        text: "Ok then..",
                                                        value: "postback_start_over"
                                                    }
                                                ]
                                            })
                                                .then((res) => {
                                                    if (res.value === "postback_start_over") {
                                                        botui.message.human({
                                                            content: "Thank you"
                                                        })
                                                            .then(() => {
                                                                botui.message.human({
                                                                    delay: 1500,
                                                                    content: "But I still have things in mind"
                                                                })
                                                                    .then(() => {
                                                                        main_menu();
                                                                    })
                                                            })
                                                    }
                                                })
                                        })
                                })
                        })
                })
        })
}

const main_menu = function () {
    botui.message.bot({
        delay: 1500,
        content: "Which one do you want to know?"
    })
        .then(() => {
            return botui.action.button({
                addMessage: false,
                delay: 1500,
                action: [
                    {
                        text: "Why chatbots matter? 🤔",
                        value: "postback_chatbot_matter"
                    },
                    {
                        text: "How do I reach you? 📱",
                        value: "postback_contact"
                    }
                ]
            })
                .then((res) => {
                    if (res.value === "postback_chatbot_matter") {
                        botui.message.human({
                            // delay:1000,
                            content: "Tell me why I should have a chatbot"
                        })
                            .then(() => {
                                botui.message.human({
                                    delay: 1000,
                                    content: "Is chatbot any good?"
                                })
                                    .then(() => {
                                        why_chatbot();
                                    })
                            })
                    } else if (res.value === "postback_contact") {
                        botui.message.human({
                            // delay:1000,
                            content: "Thank you"
                        })
                            .then(() => {
                                botui.message.human({
                                    delay: 1500,
                                    content: "How do I contact you then?"
                                })
                                    .then(() => {
                                        contact();
                                    })
                            })
                    }
                })
        })
}

const thats_interesting = function () {
    botui.message.bot({
        delay: 1500,
        content: "Of course it is!"
    })
        .then(() => {
            botui.message.bot({
                delay: 1500,
                content: "You can do a lot of things with a chatbot"
            })
                .then(() => {
                    botui.message.bot({
                        delay: 1500,
                        content: "Want some examples?"
                    })
                        .then(() => {
                            return botui.action.button({
                                delay: 1000,
                                addMessage: false,
                                action: [
                                    {
                                        text: "Yes ✔",
                                        value: "postback_yes_example"
                                    },
                                    {
                                        text: "No ❌",
                                        value: "postback_no_example"
                                    }
                                ]
                            })
                                .then((res) => {
                                    if (res.value === "postback_yes_example") {
                                        botui.message.human({
                                            // delay: 1000,
                                            content: "Yes, please.."
                                        })
                                            .then(() => {
                                                show_examples();
                                            })
                                    } else if (res.value === "postback_no_example") {
                                        botui.message.human({
                                            // delay: 1000,
                                            content: "Nah, I'm good"
                                        })
                                            .then(() => {
                                                botui.message.human({
                                                    delay: 1000,
                                                    content: "I know it already"
                                                })
                                                    .then(() => {
                                                        no_example();
                                                    })
                                            })
                                    }
                                })
                        })
                })
        })
}

const no_example = function () {
    botui.message.bot({
        delay: 1500,
        content: "Cool!"
    })
        .then(() => {
            botui.message.bot({
                delay: 1500,
                content: "You seem to be already familiar with chatbot"
            })
                .then(() => {
                    botui.message.bot({
                        delay: 1500,
                        content: "And that's awesome!"
                    })
                        .then(() => {
                            botui.action.button({
                                delay: 1500,
                                addMessage: false,
                                action: [
                                    {
                                        text: "How do I reach you? 📱",
                                        value: "postback_contact"
                                    }
                                ]
                            })
                                .then((res) => {
                                    botui.message.human({
                                        // delay:1000,
                                        content: "Yes I am"
                                    })
                                        .then(() => {
                                            botui.message.human({
                                                delay: 1500,
                                                content: "How do I contact you then?"
                                            })
                                                .then(() => {
                                                    contact();
                                                })
                                        })
                                })
                        })
                })
        })
}

const show_examples = function () {
    botui.message.bot({
        delay: 1500,
        content: "A lot!"
    })
        .then(() => {
            botui.message.bot({
                delay: 1500,
                content: "You can do a lot of things with a chatbot"
            })
                .then(() => {
                    botui.message.bot({
                        delay: 1500,
                        content: "See these examples"
                    })
                        .then(() => {
                            botui.message.bot({
                                delay: 1500,
                                content: "<strong>Order pizza</strong>: for the hungriest tummy, people can order their favourite pizza directly from the chat app",
                                type: "html"
                            })
                                .then(() => {
                                    botui.message.bot({
                                        delay: 2000,
                                        content: "<strong>Product suggestion</strong>: the chatbot will help the customers to choose the product based on their preferences",
                                        type: "html"
                                    })
                                        .then(() => {
                                            botui.message.bot({
                                                delay: 2000,
                                                content: "<strong>Customer support</strong>: do you want to stay awake in the middle of the night just to answer a simple question from the customer? Chatbot will do it for you",
                                                type: "html"
                                            })
                                                .then(() => {
                                                    botui.message.bot({
                                                        delay: 2000,
                                                        content: "<strong>Check weather</strong>: between to go or not to go, or umbrella or no umbrella",
                                                        type: "html"
                                                    })
                                                        .then(() => {
                                                            botui.message.bot({
                                                                delay: 2000,
                                                                content: "<strong>Schedule a meeting</strong>: yes, even now chatbot can help you to schedule your meeting with a client. You're welcome",
                                                                type: "html"
                                                            })
                                                                .then(() => {
                                                                    botui.message.bot({
                                                                        delay: 2000,
                                                                        content: "<strong>It's holiday!</strong> The chatbot will help you to book a hotel and the flight as well",
                                                                        type: "html"
                                                                    })
                                                                        .then(() => {
                                                                            botui.message.bot({
                                                                                delay: 2000,
                                                                                content: "<strong>Stay updated</strong>: a chatbot can help you stay updated by sending curated news for you",
                                                                                type: "html"
                                                                            })
                                                                                .then(() => {
                                                                                    botui.message.bot({
                                                                                        delay: 2000,
                                                                                        content: "<strong>Find a restaurant</strong>: planning a fancy dinner with your SO? Get the recommendation here!",
                                                                                        type: "html"
                                                                                    })
                                                                                        .then(() => {
                                                                                            botui.message.bot({
                                                                                                delay: 1500,
                                                                                                content: "Honestly, there are a lot more of it, but you'll end up in an endless list",
                                                                                            })
                                                                                                .then(() => {
                                                                                                    botui.message.bot({
                                                                                                        delay: 1500,
                                                                                                        content: "But I'm sure you get the picture now"
                                                                                                    })
                                                                                                        .then(() => {
                                                                                                            botui.action.button({
                                                                                                                delay: 1500,
                                                                                                                addMessage: false,
                                                                                                                action: [
                                                                                                                    {
                                                                                                                        text: "Yes. But how do I reach you? 📱",
                                                                                                                        value: "postback_contact"
                                                                                                                    }
                                                                                                                ]
                                                                                                            })
                                                                                                                .then((res) => {
                                                                                                                    botui.message.human({
                                                                                                                        // delay:1000,
                                                                                                                        content: "Yes I am"
                                                                                                                    })
                                                                                                                        .then(() => {
                                                                                                                            botui.message.human({
                                                                                                                                delay: 1500,
                                                                                                                                content: "How do I contact you then?"
                                                                                                                            })
                                                                                                                                .then(() => {
                                                                                                                                    contact();
                                                                                                                                })
                                                                                                                        })
                                                                                                                })
                                                                                                        })
                                                                                                })
                                                                                        })
                                                                                })
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
}

// Begin the flow
start();
