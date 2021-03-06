# Pump Debugger

A javascript console.log() wrapper

## Use

1. Include the pump_debug.js file in your HTML file
2. Turn the debugger on 
3. Send messages to the console

``` html
<script src="/js/pump_debug.js"></script>
<script>_pump.on();</script>
```

Messages will only log to the console if the debugger is set to 'on'. This is helpful for use in both live and development environments. You don't have to worry too much about forgetting to comment-out console.log() in your code anymore!

You can send formatted messages to the console using one of these handy message methods:

### _pump.info()

Send a generic blue-colored message to the console.

### _pump.warn()

Send an orange warning message to the console.

### _pump.error()

Send a red error message to the console.

### _pump.log()

Sends an unformatted message to the console.

## Sublime Text Snippets

In the tools directory are some Sublime Text snippets created by Sean Rabey that make typing the logging commands even easier. Just copy them to your Packages/User folder. 

How to use them:

| Shortcut | Command          |
|----------|------------------|
| pi       | _pump.info('');  |
| pw       | _pump.warn('');  |
| pe       | _pump.error(''); |
| pl       | _pump.log('');   |
