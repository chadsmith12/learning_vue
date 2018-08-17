// Component to display a row for a person
Vue.component('person-row', {
    template: '\
    <tr>\
        <td> {{ person.name }} </td>\
        <td> {{ person.age }} </td>\
    </tr>',
    props: ['person']
})

var app = new Vue({
    el: '#app',
    data: {
        people: [],
        newPerson: {
            id: null,
            name: "",
            age: null
        },
         currentFilter: 'none'
    },
    computed: {
        filteredPeople: function() {
            if(this.currentFilter === 'none'){
                return this.people;
            }
            else if(this.currentFilter === 'over21') {
                return this.people.filter(function (person) {
                    return person.age >= 21
                })
            }
            else{
                return this.people.filter(function (person) {
                    return person.age < 21
                })
            }

        }
    },
    methods: {
        addPerson: function() {
            var size = this.people.length;
            this.people.push({
                id: ++size,
                name: this.newPerson.name,
                age: this.newPerson.age
            })

            this.newPerson = {};
        },
        filterOver21: function() {
            this.currentFilter = 'over21';
        },
        filterUnder21: function() {
            this.currentFilter = 'under21'
        },
        clearFilter: function() {
            this.currentFilter = 'none'
        }
    }
})