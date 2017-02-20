import Ember from 'ember';

export default Ember.Component.extend({
  selectedLab: Ember.computed(function() {
    var i, lab, labItem, len, ref;
    if (this.get('entryTest')) {
      lab = this.get('entryTest.lab');
      ref = this.get('labs');
      for (i = 0, len = ref.length; i < len; i++) {
        labItem = ref[i];
        if (labItem.description === lab) {
          return labItem;
        }
      }
    }
    return {
      key: 'A1',
      description: 'Oracle'
    };
  }),
  didReceiveAttrs: function() {
    return this.set('minDate', new Date(Date.now()));
  },
  selectedTime: "8:15",
  timeSelection: ["8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45"],
  selectedTeacher: "Teacher1",
  teacherSelection: ["Teacher1", "Teacher2", "Teacher3", "Teacher4"],
  selectedRoom: "A",
  roomSelection: ["A", "B", "V", "C", "E", "F"],
  labs: [{
    key: 'A1',
    description: 'Oracle'
  }, {
    key: 'A2',
    description: 'SQL'
  }, {
    key: 'A3',
    description: 'Java'
  }, {
    key: 'A4',
    description: 'SOA'
  }, {
    key: 'A5',
    description: 'XSQL'
  }],
  actions: {
    selectLab: function(lab) {
      this.set('selectedLab', lab);
      return false;
    },
    selectTime: function(time) {
      this.set('selectedTime', time);
      return false;
    },
    selectRoom: function(room) {
      this.set('selectedRoom', room);
      return false;
    },
    selectTeacher: function(teacher) {
      this.set('selectedTeacher', teacher);
      return false;
    },
    closeSettings: function() {
      return this.sendAction('closeSettings');
    }
  }
});
