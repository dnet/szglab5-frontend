`import Ember from 'ember'`

StudentLaboratoryComponent = Ember.Component.extend
    init: ->
        @_super();
        @tick()

    tick: ->
        # toggle a property to recalculate the timeLeft in every 15 minutes
        @toggleProperty("toggleTime")
        setTimeout(( =>
              @tick();
            )
            , 1000 * 60 * 15)

    toggleTime: true

    timeLeft: Ember.computed 'toggleTime', ->
        deadline = @get('result.deadline')
        # deadline = new Date(@get('result.deadline'))
        # moment = @get('moment')
        # now = new Date()
        diff = moment(deadline).diff(moment(), 'hours')
        if diff <= 0
            diff = moment(deadline).diff(moment(), 'minutes')
            if diff <= 0
                diff = 0;
            return diff + " perc"
        return diff + " óra"


`export default StudentLaboratoryComponent`