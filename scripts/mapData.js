		var mapExtent = [0.00000000, -4000.00000000, 4000.00000000, 0.00000000];
		var mapMinZoom = 2;
		var mapMaxZoom = 6;
		var mapMaxResolution = 0.25000000;
		var mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
		var tileExtent = [0.00000000, -4000.00000000, 4000.00000000, 0.00000000];
		var maxBounds = [[0,0], [-4000,4000]];
		var crs = L.CRS.Simple;
			crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);
			crs.scale = function(zoom) {
				return Math.pow(2, zoom) / mapMinResolution;
			};
			crs.zoom = function(scale) {
				return Math.log(scale * mapMinResolution) / Math.LN2;
			};

		document.addEventListener('mouseover',function(e){
			var cursor = e.target.style.cursor;
		},false);

		var markerGroup = L.layerGroup();

		//Declare context menu
		function deleteUserMarker (e) {
			//no
		}
		function addUserMarker (e) {
			//no
		}
		function submitMarkerChange (e) {
			window.open("https://docs.google.com/forms/d/e/1FAIpQLSe4wvhWEo4ASrCY47M5JocwHNcvSHb8IUu1evrwHGDXLTo58w/viewform?usp=pp_url&entry.1052909131=L.latLng("+e.latlng.lat+", "+e.latlng.lng+")");
		}
		function submitMarker (e) {
			window.open("https://docs.google.com/forms/d/e/1FAIpQLSfLSv7A5he7TUAFLca4BtfUTXORCpDfSm1HIzgBlZaMy1ixgQ/viewform?usp=pp_url&entry.2143384121=L.latLng("+e.latlng.lat+", "+e.latlng.lng+")");
		}
		function centerMap (e) {
			map.panTo(e.latlng);
		}
		function copyCoord (e) {
			prompt("Copy the coordinates below:", "L.latLng("+e.latlng.lat+", "+e.latlng.lng+")")
		}
		function deleteMarker (e) {
			markerGroup.remove(map)
		}
		function enterCoord (e) {
			var promptCoord = prompt("Enter coordinates below:");
			if (promptCoord != null) {
				alertify.success('<p style = "font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;font-size:16px;font-style:strong;">Centering on: </p>' + promptCoord +'</p>');
				map.flyTo(L.latLng(eval(promptCoord)),5);
				new L.marker(eval(promptCoord), {title: "MARKER", contextmenu: false}).bindPopup("Temporary Marker").addTo(map).addTo(markerGroup)
            } else if (promptCoord = null){
                alertify.error('<p style = "font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;font-size:16px;font-style:strong;">No coordinates entered.</p>');
            }
		}
		
		var map = new L.Map('map', {
			renderer: L.canvas,
			maxZoom: mapMaxZoom,
			minZoom: mapMinZoom,
			layers: overlays,
			crs: crs,
			maxBounds: maxBounds,
			maxBoundsViscosity: 1,
			attributionControl:false,
			zoomControl:false,
			contextmenu: true,
        	contextmenuWidth: 140,
	      	contextmenuItems: [{
				text: 'Submit marker here',
				callback: submitMarker
	      	}, '-', {
				text: 'Center map here',
				callback: centerMap
			}, '-', {
				text: 'Copy coordinates',
				callback: copyCoord
			}, {
				text: 'Enter coordinates',
				callback: enterCoord
	      }]
		});
			
			layer = L.tileLayer('https://www.conanexilesmap.com/data/images/map/{z}/{x}/{y}.png', {
			minZoom: mapMinZoom, maxZoom: mapMaxZoom,
			bounds: [[0,0], [-4000,4000]],
			tms: false
			
		}).addTo(map);

		map.fitBounds([
        crs.unproject(L.point(mapExtent[2], mapExtent[3])),
        crs.unproject(L.point(mapExtent[0], mapExtent[1]))
		]);
		
		//Coordinates Display (Bottom Left) - old
		L.control.mousePosition().addTo(map);
		  
		//Create Pet Groups
		var petMerchantGroup = L.layerGroup();
		var petHyenaGroup = L.layerGroup();
		var petOstrichGroup = L.layerGroup();
		var petSabretoothGroup = L.layerGroup();
		var petElephantGroup = L.layerGroup();
		var petTigerGroup = L.layerGroup();
		var petRhinoGroup = L.layerGroup();
		var petFawnGroup = L.layerGroup();
		var petCrocGroup = L.layerGroup();
		var petBoarGroup = L.layerGroup();
		var petWolfGroup = L.layerGroup();
		var petBearGroup = L.layerGroup();

		//Create Mineral Groups
		var ironGroup = L.layerGroup();
		var coalGroup = L.layerGroup();
		var brimstoneGroup = L.layerGroup();
		var crystalGroup = L.layerGroup();
		var silverGroup = L.layerGroup();
		var starmetalGroup = L.layerGroup();
		var blackiceGroup = L.layerGroup();
		var obsidianGroup = L.layerGroup();
		
		//Create Thrall Groups
		var alchemistGroup = L.layerGroup();
		var armorerGroup = L.layerGroup();
		var blacksmithGroup = L.layerGroup();
		var carpenterGroup = L.layerGroup();
		var cookGroup = L.layerGroup();
		var entertainerGroup = L.layerGroup();
		var priestGroup = L.layerGroup();
		var sherpaGroup = L.layerGroup();
		var smelterGroup = L.layerGroup();
		var tannerGroup = L.layerGroup();
		var taskmasterGroup = L.layerGroup();
		var randomThrallGroup = L.layerGroup();
		
		//Create Named Thrall Groups
		var namedArcherGroup = L.layerGroup();
		var namedAlchemistGroup = L.layerGroup();
		var namedArmorerGroup = L.layerGroup();
		var namedBlacksmithGroup = L.layerGroup();
		var namedCarpenterGroup = L.layerGroup();
		var namedCookGroup = L.layerGroup();
		var namedEntertainerGroup = L.layerGroup();
		var namedPriestGroup = L.layerGroup();
		var namedSherpaGroup = L.layerGroup();
		var namedSmelterGroup = L.layerGroup();
		var namedTannerGroup = L.layerGroup();
		var namedTaskmasterGroup = L.layerGroup();
		var namedFighterGroup = L.layerGroup();
		var namedRandomThrallGroup = L.layerGroup();

		
		//Create Location Groups
		var caveGroup = L.layerGroup();
		var dungeonGroup = L.layerGroup();
		var obeliskGroup = L.layerGroup();
		var ReligionGroup = L.layerGroup();
		var campGroup = L.layerGroup();
		var capitalGroup = L.layerGroup();
		var vistaGroup = L.layerGroup();
		var ruinsGroup = L.layerGroup();
		var bossGroup = L.layerGroup();
		var loreGroup = L.layerGroup();
		var treasureGroup = L.layerGroup();
		var recipeGroup = L.layerGroup();
		var emoteGroup = L.layerGroup();

		//Create Player Marker Groups
		var playerMarker1Group = L.layerGroup();
		var playerMarker2Group = L.layerGroup();
		var playerMarker3Group = L.layerGroup();
		var playerMarker4Group = L.layerGroup();
		var playerMarker5Group = L.layerGroup();
		var playerMarker6Group = L.layerGroup();
		var playerMarker7Group = L.layerGroup();		
		
		//Set the groups
		var overlays = {
			"Pets - Pet Merchant": petMerchantGroup,
			"Pets - Hyena": petHyenaGroup,
			"Pets - Ostrich": petOstrichGroup,
			"Pets - Sabretooth": petSabretoothGroup,
			"Pets - Elephant": petElephantGroup,
			"Pets - Tiger": petTigerGroup,
			"Pets - Rhino": petRhinoGroup,
			"Pets - Fawn": petFawnGroup,
			"Pets - Croc": petCrocGroup,
			"Pets - Boar": petBoarGroup,
			"Pets - Wolf": petWolfGroup,
			"Pets - Bear" : petBearGroup,
			"Iron": ironGroup,
			"Coal": coalGroup,
			"Brimstone": brimstoneGroup,
			"Crystal": crystalGroup,
			"Silver": silverGroup,
			"Star Metal": starmetalGroup,
			"Black Ice": blackiceGroup,
			"Obsidian": obsidianGroup,
			"NPC - Religion": ReligionGroup,
			"Thrall - Alchemist": alchemistGroup,
			"Thrall - Armorer": armorerGroup,
			"Thrall - Bearer": sherpaGroup,
			"Thrall - Blacksmith": blacksmithGroup,
			"Thrall - Carpenter": carpenterGroup,
			"Thrall - Cook": cookGroup,
			"Thrall - Entertainer": entertainerGroup,
			"Thrall - Priest": priestGroup,
			"Thrall - Tanner": tannerGroup,
			"Thrall - Taskmaster": taskmasterGroup,
			"Thrall - Smelter": smelterGroup,
			"Named Thrall - Archer": namedArcherGroup,
			"Named Thrall - Alchemist": namedAlchemistGroup,
			"Named Thrall - Armorer": namedArmorerGroup,
			"Named Thrall - Bearer": namedSherpaGroup,
			"Named Thrall - Blacksmith": namedBlacksmithGroup,
			"Named Thrall - Carpenter": namedCarpenterGroup,
			"Named Thrall - Cook": namedCookGroup,
			"Named Thrall - Entertainer": namedEntertainerGroup,
			"Named Thrall - Fighter": namedFighterGroup,
			"Named Thrall - Priest": namedPriestGroup,
			"Named Thrall - Smelter": namedSmelterGroup,
			"Named Thrall - Tanner": namedTannerGroup,
			"Named Thrall - Taskmaster": namedTaskmasterGroup,			
			"Locations - Caves": caveGroup,
			"Locations - Obelisks": obeliskGroup,
			"Locations - Dungeons": dungeonGroup,
			"Locations - Camps": campGroup,
			"Locations - Capitals": capitalGroup,
			"Locations - Vistas": vistaGroup,
			"Locations - Ruins": ruinsGroup,
			"Locations - Bosses": bossGroup,
			"Locations - Lore": loreGroup,
			"Locations - Treasure": treasureGroup,
			"Locations - Recipes": recipeGroup,
			"Locations - Emotes": emoteGroup,
			"Account Markers - Marker 1": playerMarker1Group,
			"Account Markers - Marker 2": playerMarker2Group,
			"Account Markers - Marker 3": playerMarker3Group,
			"Account Markers - Marker 4": playerMarker4Group,
			"Account Markers - Marker 5": playerMarker5Group,
			"Account Markers - Marker 6": playerMarker6Group,
			"Account Markers - Marker 7": playerMarker7Group,
		};

		$(function () {
			var ajaxRequestContent = {
				url: "../backend/markerData.php",
				type: "GET",
				dataType: 'json',
				success : function (data, status, xhr) {
					if (data.error != undefined) {
						console.error("AJAX GET ERROR");
						console.error(status);
						console.error(data);
					} else {
						data.forEach(marker => {
							L.marker([marker.markerLat, marker.markerLon], {
								icon: eval(marker.iconType),
								contextmenu: marker.contextMenuEnabled,
								contextmenuInheritItems: marker.contextMenuInherit,
								contextmenuItems: [{
									text: marker.contextMenuItem1,
									callback: eval(marker.contextMenuItem1Job)
								}]
							})
							.bindPopup(marker.markerDescription)
							.addTo(eval(marker.iconGroup));
						});
					}
				},
				error : function (xhr, status) {
					console.log("Error receiving the data");
					console.log(xhr);
					console.log(status);
				}
			};

			$.ajax(ajaxRequestContent);
		});

		var hash = new L.Hash(map);
		//Group Overlay Combiner
		var groupedResources = {
			"Resources": {
				"<img src='data/images/icons/icon_ironstone.png' width='16' height='16'></img> Iron": ironGroup,
				"<img src='data/images/icons/icon_coal.png' width='16' height='16'></img> Coal": coalGroup,
				"<img src='data/images/icons/icon_brimstone.png' width='16' height='16'></img> Brimstone": brimstoneGroup,
				"<img src='data/images/icons/icon_crystal.png' width='16' height='16'></img> Crystal": crystalGroup,
				"<img src='data/images/icons/icon_silver.png' width='16' height='16'></img> Silver": silverGroup,
				"<img src='data/images/icons/icon_starmetal.png' width='16' height='16'></img> Star Metal": starmetalGroup,
				"<img src='data/images/icons/icon_black_ice.png' width='16' height='16'></img> Black Ice": blackiceGroup,
				"<img src='data/images/icons/icon_obsidian.png' width='16' height='16'></img> Obsidian": obsidianGroup
			},
		}

		var groupedThralls = {
			"Thralls": {
				"<img src='data/images/icons/icon_cook.png' width='16' height='16'></img> Alchemist": alchemistGroup,
				"<img src='data/images/icons/icon_armorer.png' width='16' height='16'></img> Armorer": armorerGroup,
				"<img src='data/images/icons/icon_sherpa.png' width='16' height='16'></img> Bearer": sherpaGroup,
				"<img src='data/images/icons/icon_blacksmith.png' width='16' height='16'></img> Blacksmith": blacksmithGroup,
				"<img src='data/images/icons/icon_carpenter.png' width='16' height='16'></img> Carpenter": carpenterGroup,
				"<img src='data/images/icons/icon_cook.png' width='16' height='16'></img> Cook": cookGroup,
				"<img src='data/images/icons/icon_entertainer.png' width='16' height='16'></img> Entertainer": entertainerGroup,
				"<img src='data/images/icons/icon_priest.png' width='16' height='16'></img> Priest": priestGroup,
				"<img src='data/images/icons/icon_tanner.png' width='16' height='16'></img> Tanner": tannerGroup,
				"<img src='data/images/icons/icon_taskmaster.png' width='16' height='16'></img> Taskmaster": taskmasterGroup,
				"<img src='data/images/icons/icon_smelter.png' width='16' height='16'></img> Smelter": smelterGroup,
				"<img src='data/images/icons/icon_random.png' width='16' height='16'></img> Random": randomThrallGroup
			},
		}
		var namedThralls = {
			"Named Thralls": {
				"<img src='data/images/icons/icon_archer.png' width='16' height='16'></img> Archer": namedArcherGroup,
				"<img src='data/images/icons/icon_cook.png' width='16' height='16'></img> Alchemist": namedAlchemistGroup,
				"<img src='data/images/icons/icon_armorer.png' width='16' height='16'></img> Armorer": namedArmorerGroup,
				"<img src='data/images/icons/icon_sherpa.png' width='16' height='16'></img> Bearer": namedSherpaGroup,
				"<img src='data/images/icons/icon_blacksmith.png' width='16' height='16'></img> Blacksmith": namedBlacksmithGroup,
				"<img src='data/images/icons/icon_carpenter.png' width='16' height='16'></img> Carpenter": namedCarpenterGroup,
				"<img src='data/images/icons/icon_cook.png' width='16' height='16'></img> Cook": namedCookGroup,
				"<img src='data/images/icons/icon_entertainer.png' width='16' height='16'></img> Entertainer": namedEntertainerGroup,
				"<img src='data/images/icons/icon_warrior.png' width='16' height='16'></img> Fighter": namedFighterGroup,
				"<img src='data/images/icons/icon_priest.png' width='16' height='16'></img> Priest": namedPriestGroup,
				"<img src='data/images/icons/icon_smelter.png' width='16' height='16'></img> Smelter": namedSmelterGroup,
				"<img src='data/images/icons/icon_tanner.png' width='16' height='16'></img> Tanner": namedTannerGroup,
				"<img src='data/images/icons/icon_taskmaster.png' width='16' height='16'></img> Taskmaster": namedTaskmasterGroup,
				"<img src='data/images/icons/icon_random.png' width='16' height='16'></img> Random": namedRandomThrallGroup
			}
		}

		var groupedLocations = {
			"Locations": {
				"<img src='data/images/icons/icon_mitra.png' width='16' height='16'></img> Religion": ReligionGroup,
				"<img src='data/images/icons/icon_cave.png' width='16' height='16'></img> Caves": caveGroup,
				"<img src='data/images/icons/icon_dungeon.png' width='16' height='16'></img> Dungeons": dungeonGroup,
				"<img src='data/images/icons/icon_obelisk.png' width='16' height='16'></img> Obelisks": obeliskGroup,
				"<img src='data/images/icons/camp_vanir.png' width='16' height='16'></img> Camps": campGroup,
				"<img src='data/images/icons/capital_vanir.png' width='16' height='16'></img> Capitals": capitalGroup,
				"<img src='data/images/icons/icon_vista.png' width='16' height='16'></img> Vistas": vistaGroup,
				"<img src='data/images/icons/icon_ruins.png' width='16' height='16'></img> Ruins": ruinsGroup,
				"<img src='data/images/icons/icon_boss.png' width='16' height='16'></img> Bosses": bossGroup,
				//"<img src='data/images/icons/icon_lore.png' width='16' height='16'></img> Lore": loreGroup,
				"<img src='data/images/icons/icon_treasure.png' width='16' height='16'></img> Treasures": treasureGroup,
				"<img src='data/images/icons/icon_recipes.png' width='16' height='16'></img> Recipes": recipeGroup,
				"<img src='data/images/icons/icon_emote.png' width='16' height='16'></img> Emotes": emoteGroup,
			}
		}

		var groupedPets = {
			"Pets": {
				"<img src='data/images/icons/icon_petmerchant.png' width='16' height='16'></img> Pet Merchant": petMerchantGroup,
				"<img src='data/images/icons/icon_pethyena.png' width='16' height='16'></img> Hyena": petHyenaGroup,
				"<img src='data/images/icons/icon_petostrich.png' width='16' height='16'></img> Ostrich": petOstrichGroup,
				"<img src='data/images/icons/icon_petsabretooth.png' width='16' height='16'></img> Sabretooth": petSabretoothGroup,
				"<img src='data/images/icons/icon_petelephant.png' width='16' height='16'></img> Elephant": petElephantGroup,
				"<img src='data/images/icons/icon_pettiger.png' width='16' height='16'></img> Tiger": petTigerGroup,
				"<img src='data/images/icons/icon_petrhino.png' width='16' height='16'></img> Rhino": petRhinoGroup,
				"<img src='data/images/icons/icon_petfawn.png' width='16' height='16'></img> Fawn": petFawnGroup,
				"<img src='data/images/icons/icon_petcroc.png' width='16' height='16'></img> Crocodile": petCrocGroup,
				"<img src='data/images/icons/icon_petboar.png' width='16' height='16'></img> Boar": petBoarGroup,
				"<img src='data/images/icons/icon_petwolf.png' width='16' height='16'></img> Wolf": petWolfGroup,
				"<img src='data/images/icons/icon_petbear.png' width='16' height='16'></img> Bear": petBearGroup,
			}
		}

		var groupedAccountMarkers = {
			"Account": {
				"<img src='data/images/markers/playermarker/playerMarker1.png' width='16' height='16'></img> Marker type 1": playerMarker1Group,
				"<img src='data/images/markers/playermarker/playerMarker2.png' width='16' height='16'></img> Marker type 2": playerMarker2Group,
				"<img src='data/images/markers/playermarker/playerMarker3.png' width='16' height='16'></img> Marker type 3": playerMarker3Group,
				"<img src='data/images/markers/playermarker/playerMarker4.png' width='16' height='16'></img> Marker type 4": playerMarker4Group,
				"<img src='data/images/markers/playermarker/playerMarker5.png' width='16' height='16'></img> Marker type 5": playerMarker5Group,
				"<img src='data/images/markers/playermarker/playerMarker6.png' width='16' height='16'></img> Marker type 6": playerMarker6Group,
				"<img src='data/images/markers/playermarker/playerMarker7.png' width='16' height='16'></img> Marker type 7": playerMarker7Group,
			}
		}

		//Enable Group Options
		var options = {
			autoZIndex: true,
			groupCheckboxes: true,
			collapsed: true
		};

		var layerControlResources = L.control.groupedLayers(null, groupedResources, options);
		var layerControlThralls = L.control.groupedLayers(null, groupedThralls, options);
		var layerControlNamedThralls = L.control.groupedLayers(null, namedThralls, options);
		var layerControlLocations = L.control.groupedLayers(null, groupedLocations, options);
		var layerControlPets = L.control.groupedLayers(null, groupedPets, options);
		var layerControlPlayerMarkers = L.control.groupedLayers(null, groupedAccountMarkers, options)

		//OLD FILTERING
		layerControlResources.addTo(map);
		layerControlThralls.addTo(map);
		layerControlNamedThralls.addTo(map);
		layerControlLocations.addTo(map);
		layerControlPets.addTo(map);
		layerControlPlayerMarkers;

		//Disable click through elements
		L.DomEvent.disableClickPropagation(layerControlLocations._container);
		L.DomEvent.disableClickPropagation(layerControlThralls._container);
		L.DomEvent.disableClickPropagation(layerControlResources._container);
		L.DomEvent.disableClickPropagation(layerControlNamedThralls._container);
		L.DomEvent.disableClickPropagation(layerControlPets._container);

		//Add Default Filters
		obeliskGroup.addTo(map);
		campGroup.addTo(map);
		capitalGroup.addTo(map);
		ruinsGroup.addTo(map);
		recipeGroup.addTo(map);
		emoteGroup.addTo(map);
		petMerchantGroup.addTo(map);