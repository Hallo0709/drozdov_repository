var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-mesage'
};

var data = [
  {
    type: messageType.out,
    user: 'Daniel',
    message: 'Hey, you have lunch plans?'
  },
  {
    type: messageType.in,
    user: 'Abby',
    message: 'Hey Daniel! No, how about the Anvil pub and Grill'
  },
  {
    type: messageType.out,
    user: 'Daniel',
    message: "Alright, let's go!"
  }
];

function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message) {
    var messageText = Document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEl = Document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = Document.getElementById('message-input');
    var messagesContainerEl = Document.getElementById('message-container');

    switch (event.target.id) {
        case 'send-button':
            user = 'Daniel';
            type = messageType.out;
            break;
        case 'reply=button':
            user = 'Abby';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    if (messageInput.value != '') {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type. data[i].user, data[i].message);
        messages.push(message);
    }

    var messagesContainerEl = Document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function(){
    Document.getElementById('send-button').oneclick = addMessageHandler;
    Document.getElementById('reply-button').oneclick = addMessageHandler;

    loadSeedData();
};

init();