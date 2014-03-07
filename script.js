	var users = ["Pedro Araujo", "Tony", "Adriana", "Rafael Melo", "Rafaela Fernanda", "Luis Fernando"];
	var autoSuggest = document.querySelector('#auto-suggest');
	var suggests = document.querySelector('.suggests');
	var suggestList = [];

	function searchUsers(autoSuggestValue) {
		var re = new RegExp(autoSuggestValue,'i');		

		for (var i = users.length - 1; i >= 0; i--) {
			if (users[i].match(re) != null) {

				checkSuggestOnList(users[i]);
				updateSuggestList();
			};
		};
	}

	function updateSuggestList() {
		suggests.innerHTML = "";
		for (var i = suggestList.length - 1; i >= 0; i--) {
			suggests.innerHTML += "<p>"+suggestList[i]+"</p>";
		};
	}

	function checkSuggestOnList(suggest) {
		if (suggestList.length > 0) {
			for (var i = suggestList.length - 1; i >= 0; i--) {
				if (suggestList[i] != suggest) {

					suggestList.push(suggest);
				};
			};
		} else {
			suggestList.push(suggest);
		}

	}

	function resetSuggest() {
		suggests.innerHTML = "";
		suggestList.length = 0;
	}

	autoSuggest.onkeyup = function (argument) {
		resetSuggest();
		if (autoSuggest.value.length >= 3) {
			searchUsers(autoSuggest.value);
		}
	}	