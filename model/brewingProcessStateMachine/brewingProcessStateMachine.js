angular.module('brew-everywhere').constant('brewingProcessStateMachine', {
  id: 'BrewProcess',
  processController: 'BrewProcessController',
  title: 'Brew Process',
  description: 'UI Process flow for Brewing a Batch of Beer',
  transitions: [
    {id: 'Begin', targetState: 'PreHeatMash'},
    {id: 'PreHeatMashHeating', targetState: 'PreHeatMash'},
    {id: 'MashTempReached', targetState: 'Mash'},
    {id: 'MashTimeWaiting', targetState: 'Mash'},
    {id: 'MashTimeReached', targetState: 'MashOut'},
    {id: 'MashOutTimeWaiting', targetState: 'MashOut'},
    {id: 'MashOutTimeReached', targetState: 'PreHeatBoil'},
    {id: 'PreHeatBoilHeating', targetState: 'PreHeatBoil'},
    {id: 'BoilReached', targetState: 'Boil'},
    {id: 'BoilTimeWaiting', targetState: 'Boil'},
    {id: 'BoilTimeReached', targetState: 'Exit'},
    {id: 'exit', targetState: 'Exit'}
  ],
  states: [
    { id: 'Exit',
      activityId: 'BrewProcess',
      Url: '/home',
      title: 'Exit',
      description: 'Return to Home Screen',
      commands: []
    },
    { id: 'Error',
      activityId: 'BrewProcess',
      Url: '/error',
      title: 'Error',
      description: 'An error has occurred while performing the last action.',
      commands: [
        { id: 'Previous', transition: 'exit'},
        { id: 'Next', transition: 'exit'},
        { id: 'Cancel', transition: 'exit'}
      ]},
    { id: 'PreHeatMash',
      activityId: 'BrewProcess',
      Url: '/preheatmash',
      title: 'Pre-Heat Mash',
      description: 'Pre-heat the mash water to reach the desired mash temperature',
      commands: [
        { id: 'Waiting', transition: 'PreHeatMashHeating'},
        { id: 'TemperatureReached', transition: 'MashTempReached'},
        { id: 'Exit', transition: 'exit'},
        { id: 'DisplayErrorMessage', transition: 'displayErrorMessage'}
      ]},
    { id: 'Mash',
      activityId: 'BrewProcess',
      Url: '/mash',
      title: 'Mash',
      description: 'Steep the grains in the mash water for the desired time',
      commands: [
        { id: 'Waiting', transition: 'MashTimeWaiting'},
        { id: 'TimeReached', transition: 'MashTimeReached'},
        { id: 'Exit', transition: 'exit'},
        { id: 'DisplayErrorMessage', transition: 'displayErrorMessage'}
      ]},
    { id: 'MashOut',
      activityId: 'BrewProcess',
      Url: '/mashout',
      title: 'Mash Out',
      description: 'Steep the grains at 170 degrees F to stop all conversion',
      commands: [
        { id: 'Waiting', transition: 'MashOutTimeWaiting'},
        { id: 'TimeReached', transition: 'MashOutTimeReached'},
        { id: 'Exit', transition: 'exit'},
        { id: 'DisplayErrorMessage', transition: 'displayErrorMessage'}
      ]},
    { id: 'PreHeatBoil',
      activityId: 'BrewProcess',
      Url: '/preheatboil',
      title: 'Pre-Heat Boil',
      description: 'Pre-heat the the wort to a boil',
      commands: [
        { id: 'Waiting', transition: 'PreHeatBoilHeating'},
        { id: 'TemperatureReached', transition: 'BoilReached'},
        { id: 'Exit', transition: 'exit'},
        { id: 'DisplayErrorMessage', transition: 'displayErrorMessage'}
      ]},
    { id: 'Boil',
      activityId: 'BrewProcess',
      Url: '/boil',
      title: 'Boil',
      description: 'Boil the wort for the desired time',
      commands: [
        { id: 'Waiting', transition: 'BoilTimeWaiting'},
        { id: 'TimeReached', transition: 'BoilTimeReached'},
        { id: 'Exit', transition: 'exit'},
        { id: 'DisplayErrorMessage', transition: 'displayErrorMessage'}
      ]}
  ]
});