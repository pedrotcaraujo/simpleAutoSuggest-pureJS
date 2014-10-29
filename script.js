+function(){
	
	'use strict';

	function AutoSuggest(element, data) {
		var element = element
		var USERS = data || [];	
		
		var autoSuggest = element.querySelector('.auto-suggest-input'),
		suggests = element.querySelector('.auto-suggest-list'),
		suggestList = [];
		search();

		function search() {
			resetSuggest();
			if (autoSuggest.value.length >= 3) {
				searchUsers(autoSuggest.value);
			}
		}

		function searchUsers(autoSuggestValue) {
			var re = new RegExp(autoSuggestValue,'i');		

			for (var i = USERS.length - 1; i >= 0; i--) {
				if (USERS[i].match(re) != null) {

					checkSuggestOnList(USERS[i]);
					updateSuggestList();
					buildLinkItemSuggest();		
				};
			};
		}

		function checkSuggestOnList(suggest) {
			if (suggestList.length > 0) {
				for (var i = suggestList.length - 1; i >= 0; i--) {
					if (suggestList[i] != suggest) {
						suggestList.push(suggest);
					}
				};
			} else {
				suggestList.push(suggest);
			}
		}

		function updateSuggestList() {
			suggests.innerHTML = "";
			suggests.style.display = "none";
			for (var i = suggestList.length - 1; i >= 0; i--) {
				if (i == suggestList.length - 1) {
					suggests.style.display = "block";
				};
				suggests.innerHTML += "<li class='item-suggest'>"+suggestList[i]+"</li>";
			};
		}

		function buildLinkItemSuggest() {
			if (document.querySelectorAll('.item-suggest').length > 0) {
				var itemSuggest = document.querySelectorAll('.item-suggest');
				for (var i = itemSuggest.length - 1; i >= 0; i--) {			
					itemSuggest[i].onclick = function() {
						autoSuggest.value = this.innerText;
						resetSuggest();
					}
				};
			};
		}

		function resetSuggest() {
			suggests.innerHTML = "";
			suggestList.length = 0;
			suggests.style.display = "none";
		}
	};

	document.querySelector('[data-auto-suggest]').addEventListener('keyup', function() {
		AutoSuggest(this, ["Pedro Araujo", "Tony", "Adriana", "Rafael Melo", "Rafaela Fernanda", "Luis Fernando"])
	}, false);

}()
