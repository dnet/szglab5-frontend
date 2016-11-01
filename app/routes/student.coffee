`import Ember from 'ember'`
`import MenuHelper from '../mixins/menu-helper'`

StudentRoute = Ember.Route.extend MenuHelper,
  model: ->
    return {
      name: "Teszt Hallgató",
      neptun: "Neptun",
      id: 1,
      currentLab: 'lab2'

      results: {
        lab1: {
          description: "1. Labor",
          statusCode: "after",
          location: "IL105",
          time: "2016.07.16. 16:15",
          demonstrator: "Teszt Oktató 1",
          entrytest: "5",
          report: {
            grade: "4",
            evaluator: "Teszt Oktató 2",
            review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
            },
          laboratory: {
            grade: "4",
            review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
          }
        },
        lab2: {
          description: "2. Labor",
          statusCode: "during",
          location: "IL105",
          time: "2016.08.15. 16:15",
          demonstrator: "Teszt Oktató 1",
          deadline: "2016.08.15. 21:15",
          # deadline: "2016.09.01. 16:15",
          repository: "git@gitlab.db.bme.hu:pelda/pelda.git",
          entrytest: "5",
          finalcommit: "tag1",
          commits: ["tag1","tag2","tag3v4.0.0","v4.0.0"]
        },
        lab3: {
          description: "3. Labor",
          statusCode: "before",
          location: "IL105",
          time: "2016.09.16. 16:15",
          demonstrator: "Teszt Oktató 1",
        }

      }

    }

`export default StudentRoute`
