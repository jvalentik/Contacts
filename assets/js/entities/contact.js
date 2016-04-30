ContactManager.module("Entities", function(Entities, ContactManager,
										Backbone, Marionette, $, _) {
	Entities.Contact = Backbone.Model.extend({});
	Entities.ContactsCollection = Backbone.Collection.extend({
		model: Entities.Contact,
		comparator: function(a, b) {
				if (a.get("firstName") > b.get("firstName")) {
    				return 1;
  				}
	  			if (a.get("firstName") < b.get("firstName")) {
	    			return -1;
	  			}
	  			if (a.get("lastName") > b.get("lastName")) {
    				return 1;
  				}
	  			if (a.get("lastName") < b.get("flastName")) {
	    			return -1;
	  			}
	  			return 0;
				}
		}); 
		var contacts;
		var initializeContacts = function(){
			contacts = new Entities.ContactsCollection([
				{id: 1, firstName: "Jan", lastName: "Valentik", phoneNumber: "555-123"},
				{id: 2, firstName: "Pavel", lastName: "Rotman", phoneNumber: "555-124"},
				{id: 3, firstName: "Michal", lastName: "Cierny", phoneNumber: "555-678"}
			]);
		};
		var API = {
			getContactEntities: function() {
				if (contacts=== undefined) {
					initializeContacts();
				}
				return contacts;				
			}
		}; 
		ContactManager.reqres.setHandler("contact:entities", function(){
			return API.getContactEntities();
		});            
	});
