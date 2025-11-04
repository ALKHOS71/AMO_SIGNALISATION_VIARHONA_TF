var wms_layers = [];


    var projection_Ortho20cm_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortho20cm_0 = projection_Ortho20cm_0.getExtent();
    var size_Ortho20cm_0 = ol.extent.getWidth(projectionExtent_Ortho20cm_0) / 256;
    var resolutions_Ortho20cm_0 = new Array(14);
    var matrixIds_Ortho20cm_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortho20cm_0[z] = size_Ortho20cm_0 / Math.pow(2, z);
        matrixIds_Ortho20cm_0[z] = z;
    }
    var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/annexes/ressources/wmts/ortho.xml",
                                attributions: ' ',
                                "layer": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortho20cm_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortho20cm_0),
                resolutions: resolutions_Ortho20cm_0,
                matrixIds: matrixIds_Ortho20cm_0
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortho 20 cm',
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tracrabattementvlo_2 = new ol.format.GeoJSON();
var features_Tracrabattementvlo_2 = format_Tracrabattementvlo_2.readFeatures(json_Tracrabattementvlo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracrabattementvlo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracrabattementvlo_2.addFeatures(features_Tracrabattementvlo_2);
var lyr_Tracrabattementvlo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tracrabattementvlo_2, 
                style: style_Tracrabattementvlo_2,
                popuplayertitle: 'Tracé rabattement vélo',
                interactive: true,
                title: '<img src="styles/legend/Tracrabattementvlo_2.png" /> Tracé rabattement vélo'
            });
var format_Tracrabattementauto_3 = new ol.format.GeoJSON();
var features_Tracrabattementauto_3 = format_Tracrabattementauto_3.readFeatures(json_Tracrabattementauto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracrabattementauto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracrabattementauto_3.addFeatures(features_Tracrabattementauto_3);
var lyr_Tracrabattementauto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tracrabattementauto_3, 
                style: style_Tracrabattementauto_3,
                popuplayertitle: 'Tracé rabattement auto',
                interactive: true,
                title: '<img src="styles/legend/Tracrabattementauto_3.png" /> Tracé rabattement auto'
            });
var format_Tracsdesitinrairesscurissdesortie_4 = new ol.format.GeoJSON();
var features_Tracsdesitinrairesscurissdesortie_4 = format_Tracsdesitinrairesscurissdesortie_4.readFeatures(json_Tracsdesitinrairesscurissdesortie_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracsdesitinrairesscurissdesortie_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracsdesitinrairesscurissdesortie_4.addFeatures(features_Tracsdesitinrairesscurissdesortie_4);
var lyr_Tracsdesitinrairesscurissdesortie_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tracsdesitinrairesscurissdesortie_4, 
                style: style_Tracsdesitinrairesscurissdesortie_4,
                popuplayertitle: 'Tracés des itinéraires sécurisés de sortie',
                interactive: true,
                title: '<img src="styles/legend/Tracsdesitinrairesscurissdesortie_4.png" /> Tracés des itinéraires sécurisés de sortie'
            });
var format_PlesousitessignalsdepuisViaRhna_5 = new ol.format.GeoJSON();
var features_PlesousitessignalsdepuisViaRhna_5 = format_PlesousitessignalsdepuisViaRhna_5.readFeatures(json_PlesousitessignalsdepuisViaRhna_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlesousitessignalsdepuisViaRhna_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlesousitessignalsdepuisViaRhna_5.addFeatures(features_PlesousitessignalsdepuisViaRhna_5);
var lyr_PlesousitessignalsdepuisViaRhna_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlesousitessignalsdepuisViaRhna_5, 
                style: style_PlesousitessignalsdepuisViaRhna_5,
                popuplayertitle: 'Pôles ou sites signalés depuis ViaRhôna',
                interactive: true,
                title: '<img src="styles/legend/PlesousitessignalsdepuisViaRhna_5.png" /> Pôles ou sites signalés depuis ViaRhôna'
            });
var format_AiredaccueilprincipaleVIARHONA_6 = new ol.format.GeoJSON();
var features_AiredaccueilprincipaleVIARHONA_6 = format_AiredaccueilprincipaleVIARHONA_6.readFeatures(json_AiredaccueilprincipaleVIARHONA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AiredaccueilprincipaleVIARHONA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AiredaccueilprincipaleVIARHONA_6.addFeatures(features_AiredaccueilprincipaleVIARHONA_6);
var lyr_AiredaccueilprincipaleVIARHONA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AiredaccueilprincipaleVIARHONA_6, 
                style: style_AiredaccueilprincipaleVIARHONA_6,
                popuplayertitle: 'Aire d\'accueil principale VIARHONA',
                interactive: true,
                title: '<img src="styles/legend/AiredaccueilprincipaleVIARHONA_6.png" /> Aire d\'accueil principale VIARHONA'
            });
var format_VIARHONAPROJETTRACE_7 = new ol.format.GeoJSON();
var features_VIARHONAPROJETTRACE_7 = format_VIARHONAPROJETTRACE_7.readFeatures(json_VIARHONAPROJETTRACE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONAPROJETTRACE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONAPROJETTRACE_7.addFeatures(features_VIARHONAPROJETTRACE_7);
var lyr_VIARHONAPROJETTRACE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONAPROJETTRACE_7, 
                style: style_VIARHONAPROJETTRACE_7,
                popuplayertitle: 'VIARHONA - PROJET TRACE',
                interactive: false,
                title: '<img src="styles/legend/VIARHONAPROJETTRACE_7.png" /> VIARHONA - PROJET TRACE'
            });
var format_VIARHONA_8 = new ol.format.GeoJSON();
var features_VIARHONA_8 = format_VIARHONA_8.readFeatures(json_VIARHONA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_8.addFeatures(features_VIARHONA_8);
var lyr_VIARHONA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONA_8, 
                style: style_VIARHONA_8,
                popuplayertitle: 'VIARHONA',
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_8.png" /> VIARHONA'
            });
var format_ProjetdedfinitionVIARHONA_9 = new ol.format.GeoJSON();
var features_ProjetdedfinitionVIARHONA_9 = format_ProjetdedfinitionVIARHONA_9.readFeatures(json_ProjetdedfinitionVIARHONA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetdedfinitionVIARHONA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetdedfinitionVIARHONA_9.addFeatures(features_ProjetdedfinitionVIARHONA_9);
var lyr_ProjetdedfinitionVIARHONA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjetdedfinitionVIARHONA_9, 
                style: style_ProjetdedfinitionVIARHONA_9,
                popuplayertitle: 'Projet de définition VIARHONA',
                interactive: true,
                title: '<img src="styles/legend/ProjetdedfinitionVIARHONA_9.png" /> Projet de définition VIARHONA'
            });

lyr_Ortho20cm_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Tracrabattementvlo_2.setVisible(true);lyr_Tracrabattementauto_3.setVisible(true);lyr_Tracsdesitinrairesscurissdesortie_4.setVisible(true);lyr_PlesousitessignalsdepuisViaRhna_5.setVisible(true);lyr_AiredaccueilprincipaleVIARHONA_6.setVisible(true);lyr_VIARHONAPROJETTRACE_7.setVisible(true);lyr_VIARHONA_8.setVisible(true);lyr_ProjetdedfinitionVIARHONA_9.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_OpenStreetMap_1,lyr_Tracrabattementvlo_2,lyr_Tracrabattementauto_3,lyr_Tracsdesitinrairesscurissdesortie_4,lyr_PlesousitessignalsdepuisViaRhna_5,lyr_AiredaccueilprincipaleVIARHONA_6,lyr_VIARHONAPROJETTRACE_7,lyr_VIARHONA_8,lyr_ProjetdedfinitionVIARHONA_9];
lyr_Tracrabattementvlo_2.set('fieldAliases', {'GARE': 'GARE', 'TRAVAUX ?': 'TRAVAUX ?', 'JALONNEMEN': 'JALONNEMEN', 'REMARQUES': 'REMARQUES', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OP EPCI': 'OP EPCI', 'OP TERRAIN': 'OP TERRAIN', });
lyr_Tracrabattementauto_3.set('fieldAliases', {'AIRE': 'AIRE', 'REMARQUES': 'REMARQUES', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OPE': 'OPE', 'EXISTANT': 'EXISTANT', });
lyr_Tracsdesitinrairesscurissdesortie_4.set('fieldAliases', {'SITE SIGNA': 'SITE SIGNA', 'TRAVAUX': 'TRAVAUX', 'ANTENNE': 'ANTENNE', 'REMARQUES': 'REMARQUES', 'VARIANTE': 'VARIANTE', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OP EPCI': 'OP EPCI', 'OP TERRAIN': 'OP TERRAIN', });
lyr_PlesousitessignalsdepuisViaRhna_5.set('fieldAliases', {'Nom': 'Nom', 'CC': 'CC', 'Commune': 'Commune', 'HIERARCHIS': 'HIERARCHIS', 'SUR VIARHO': 'SUR VIARHO', 'AMGT ?': 'AMGT ?', });
lyr_AiredaccueilprincipaleVIARHONA_6.set('fieldAliases', {'NOM': 'NOM', 'PARKING VL': 'PARKING VL', 'NIVEAU': 'NIVEAU', 'RABATTEMEN': 'RABATTEMEN', 'TYPE AIRE': 'TYPE AIRE', });
lyr_VIARHONAPROJETTRACE_7.set('fieldAliases', {'id': 'id', 'statut': 'statut', });
lyr_VIARHONA_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'id': 'id', });
lyr_ProjetdedfinitionVIARHONA_9.set('fieldAliases', {'EXISTANT__': 'EXISTANT__', 'Itinérair': 'Itinérair', 'Fonction_d': 'Fonction_d', 'Type_de_si': 'Type_de_si', 'Départeme': 'Départeme', 'EPCI_impla': 'EPCI_impla', 'Commune_im': 'Commune_im', 'Voie_d_imp': 'Voie_d_imp', 'Gestionnai': 'Gestionnai', 'Zones_prot': 'Zones_prot', 'Autorités': 'Autorités', 'Photo': 'Photo', 'Lien_photo': 'Lien_photo', 'Identifian': 'Identifian', 'Code_carre': 'Code_carre', 'Code_mât': 'Code_mât', 'Code_lame': 'Code_lame', 'Sens_VIARH': 'Sens_VIARH', 'Type_pan_1': 'Type_pan_1', 'Typologie_': 'Typologie_', 'Sens_flèc': 'Sens_flèc', 'ID_SC2': 'ID_SC2', 'Logo_ViaRh': 'Logo_ViaRh', 'Logo_écha': 'Logo_écha', 'Mention_1': 'Mention_1', 'Km1': 'Km1', 'ID_site_si': 'ID_site_si', 'Mention_2': 'Mention_2', 'Km2': 'Km2', 'ID_site__1': 'ID_site__1', 'Mention_3': 'Mention_3', 'Km3': 'Km3', 'ID_site__2': 'ID_site__2', 'Mention_4': 'Mention_4', 'Km4': 'Km4', 'ID_site__3': 'ID_site__3', 'Support_ex': 'Support_ex', 'Dimension_': 'Dimension_', 'Couleur_su': 'Couleur_su', 'Dimensio_1': 'Dimensio_1', 'MAITRE_D_O': 'MAITRE_D_O', 'Dépose_su': 'Dépose_su', 'Pose_suppo': 'Pose_suppo', 'Pose_sup_1': 'Pose_sup_1', 'Dépose_Pa': 'Dépose_Pa', 'Repose_Pan': 'Repose_Pan', 'Pose_Panne': 'Pose_Panne', 'Marquage_a': 'Marquage_a', 'REMARQUE': 'REMARQUE', });
lyr_Tracrabattementvlo_2.set('fieldImages', {'GARE': 'TextEdit', 'TRAVAUX ?': 'TextEdit', 'JALONNEMEN': 'TextEdit', 'REMARQUES': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OP EPCI': 'TextEdit', 'OP TERRAIN': 'TextEdit', });
lyr_Tracrabattementauto_3.set('fieldImages', {'AIRE': 'TextEdit', 'REMARQUES': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OPE': 'TextEdit', 'EXISTANT': 'TextEdit', });
lyr_Tracsdesitinrairesscurissdesortie_4.set('fieldImages', {'SITE SIGNA': 'TextEdit', 'TRAVAUX': 'TextEdit', 'ANTENNE': 'TextEdit', 'REMARQUES': 'TextEdit', 'VARIANTE': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OP EPCI': 'TextEdit', 'OP TERRAIN': 'TextEdit', });
lyr_PlesousitessignalsdepuisViaRhna_5.set('fieldImages', {'Nom': 'TextEdit', 'CC': 'TextEdit', 'Commune': 'TextEdit', 'HIERARCHIS': 'TextEdit', 'SUR VIARHO': 'TextEdit', 'AMGT ?': 'TextEdit', });
lyr_AiredaccueilprincipaleVIARHONA_6.set('fieldImages', {'NOM': 'TextEdit', 'PARKING VL': 'TextEdit', 'NIVEAU': 'TextEdit', 'RABATTEMEN': 'TextEdit', 'TYPE AIRE': 'TextEdit', });
lyr_VIARHONAPROJETTRACE_7.set('fieldImages', {'id': 'TextEdit', 'statut': '', });
lyr_VIARHONA_8.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'id': '', });
lyr_ProjetdedfinitionVIARHONA_9.set('fieldImages', {'EXISTANT__': 'TextEdit', 'Itinérair': 'TextEdit', 'Fonction_d': 'TextEdit', 'Type_de_si': 'TextEdit', 'Départeme': 'TextEdit', 'EPCI_impla': 'TextEdit', 'Commune_im': 'TextEdit', 'Voie_d_imp': 'TextEdit', 'Gestionnai': 'TextEdit', 'Zones_prot': 'TextEdit', 'Autorités': 'TextEdit', 'Photo': 'TextEdit', 'Lien_photo': 'TextEdit', 'Identifian': 'TextEdit', 'Code_carre': 'TextEdit', 'Code_mât': 'TextEdit', 'Code_lame': 'TextEdit', 'Sens_VIARH': 'TextEdit', 'Type_pan_1': 'TextEdit', 'Typologie_': 'TextEdit', 'Sens_flèc': 'TextEdit', 'ID_SC2': 'TextEdit', 'Logo_ViaRh': 'TextEdit', 'Logo_écha': 'TextEdit', 'Mention_1': 'TextEdit', 'Km1': 'TextEdit', 'ID_site_si': 'TextEdit', 'Mention_2': 'TextEdit', 'Km2': 'TextEdit', 'ID_site__1': 'TextEdit', 'Mention_3': 'TextEdit', 'Km3': 'TextEdit', 'ID_site__2': 'TextEdit', 'Mention_4': 'TextEdit', 'Km4': 'TextEdit', 'ID_site__3': 'TextEdit', 'Support_ex': 'TextEdit', 'Dimension_': 'TextEdit', 'Couleur_su': 'TextEdit', 'Dimensio_1': 'TextEdit', 'MAITRE_D_O': 'TextEdit', 'Dépose_su': 'TextEdit', 'Pose_suppo': 'TextEdit', 'Pose_sup_1': 'TextEdit', 'Dépose_Pa': 'TextEdit', 'Repose_Pan': 'TextEdit', 'Pose_Panne': 'TextEdit', 'Marquage_a': 'TextEdit', 'REMARQUE': 'TextEdit', });
lyr_Tracrabattementvlo_2.set('fieldLabels', {'GARE': 'header label - visible with data', 'TRAVAUX ?': 'header label - visible with data', 'JALONNEMEN': 'header label - visible with data', 'REMARQUES': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OP EPCI': 'header label - visible with data', 'OP TERRAIN': 'header label - visible with data', });
lyr_Tracrabattementauto_3.set('fieldLabels', {'AIRE': 'header label - visible with data', 'REMARQUES': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OPE': 'header label - visible with data', 'EXISTANT': 'header label - visible with data', });
lyr_Tracsdesitinrairesscurissdesortie_4.set('fieldLabels', {'SITE SIGNA': 'header label - visible with data', 'TRAVAUX': 'header label - visible with data', 'ANTENNE': 'header label - visible with data', 'REMARQUES': 'header label - always visible', 'VARIANTE': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OP EPCI': 'header label - visible with data', 'OP TERRAIN': 'header label - visible with data', });
lyr_PlesousitessignalsdepuisViaRhna_5.set('fieldLabels', {'Nom': 'no label', 'CC': 'no label', 'Commune': 'no label', 'HIERARCHIS': 'header label - visible with data', 'SUR VIARHO': 'inline label - always visible', 'AMGT ?': 'inline label - always visible', });
lyr_AiredaccueilprincipaleVIARHONA_6.set('fieldLabels', {'NOM': 'no label', 'PARKING VL': 'header label - visible with data', 'NIVEAU': 'header label - visible with data', 'RABATTEMEN': 'header label - visible with data', 'TYPE AIRE': 'no label', });
lyr_VIARHONAPROJETTRACE_7.set('fieldLabels', {'id': 'no label', 'statut': 'no label', });
lyr_VIARHONA_8.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'id': 'no label', });
lyr_ProjetdedfinitionVIARHONA_9.set('fieldLabels', {'EXISTANT__': 'no label', 'Itinérair': 'no label', 'Fonction_d': 'no label', 'Type_de_si': 'no label', 'Départeme': 'no label', 'EPCI_impla': 'no label', 'Commune_im': 'no label', 'Voie_d_imp': 'no label', 'Gestionnai': 'no label', 'Zones_prot': 'no label', 'Autorités': 'no label', 'Photo': 'no label', 'Lien_photo': 'no label', 'Identifian': 'no label', 'Code_carre': 'no label', 'Code_mât': 'no label', 'Code_lame': 'no label', 'Sens_VIARH': 'no label', 'Type_pan_1': 'no label', 'Typologie_': 'no label', 'Sens_flèc': 'no label', 'ID_SC2': 'no label', 'Logo_ViaRh': 'no label', 'Logo_écha': 'no label', 'Mention_1': 'no label', 'Km1': 'no label', 'ID_site_si': 'no label', 'Mention_2': 'no label', 'Km2': 'no label', 'ID_site__1': 'no label', 'Mention_3': 'no label', 'Km3': 'no label', 'ID_site__2': 'no label', 'Mention_4': 'no label', 'Km4': 'no label', 'ID_site__3': 'no label', 'Support_ex': 'no label', 'Dimension_': 'no label', 'Couleur_su': 'no label', 'Dimensio_1': 'no label', 'MAITRE_D_O': 'no label', 'Dépose_su': 'no label', 'Pose_suppo': 'no label', 'Pose_sup_1': 'no label', 'Dépose_Pa': 'no label', 'Repose_Pan': 'no label', 'Pose_Panne': 'no label', 'Marquage_a': 'no label', 'REMARQUE': 'no label', });
lyr_ProjetdedfinitionVIARHONA_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});