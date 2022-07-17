//debugger
new Vue ({
	el: '#taskList',
	data: {
		title: 'to do list',
		tasks: [
			{ name: 'Learn React' },
			{ name: 'Play dota' },
			{ name: 'Figma Layout' },
			{ name: 'Play dota' },
			{ name: 'Learn React' },
			{ name: 'Get a job' },
			{ name: 'Did not work out?' },
			{ name: 'Learn React...' },
		]
	},
	methods: {
		newItem: function() {
			if (!this.tasks.name) {
				return
			}
			this.tasks.push ( {
				name: this.tasks.name,
				del: ''
			});
      this.tasks.name = "";
		},
		delItem: function (task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
})