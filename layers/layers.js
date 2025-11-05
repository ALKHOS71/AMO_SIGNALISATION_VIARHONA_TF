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
var format_AiredaccueilprincipaleVIARHONA_5 = new ol.format.GeoJSON();
var features_AiredaccueilprincipaleVIARHONA_5 = format_AiredaccueilprincipaleVIARHONA_5.readFeatures(json_AiredaccueilprincipaleVIARHONA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AiredaccueilprincipaleVIARHONA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AiredaccueilprincipaleVIARHONA_5.addFeatures(features_AiredaccueilprincipaleVIARHONA_5);
var lyr_AiredaccueilprincipaleVIARHONA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AiredaccueilprincipaleVIARHONA_5, 
                style: style_AiredaccueilprincipaleVIARHONA_5,
                popuplayertitle: 'Aire d\'accueil principale VIARHONA',
                interactive: true,
                title: '<img src="styles/legend/AiredaccueilprincipaleVIARHONA_5.png" /> Aire d\'accueil principale VIARHONA'
            });
var format_VIARHONAPROJETTRACE_6 = new ol.format.GeoJSON();
var features_VIARHONAPROJETTRACE_6 = format_VIARHONAPROJETTRACE_6.readFeatures(json_VIARHONAPROJETTRACE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONAPROJETTRACE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONAPROJETTRACE_6.addFeatures(features_VIARHONAPROJETTRACE_6);
var lyr_VIARHONAPROJETTRACE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONAPROJETTRACE_6, 
                style: style_VIARHONAPROJETTRACE_6,
                popuplayertitle: 'VIARHONA - PROJET TRACE',
                interactive: false,
                title: '<img src="styles/legend/VIARHONAPROJETTRACE_6.png" /> VIARHONA - PROJET TRACE'
            });
var format_VIARHONA_7 = new ol.format.GeoJSON();
var features_VIARHONA_7 = format_VIARHONA_7.readFeatures(json_VIARHONA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_7.addFeatures(features_VIARHONA_7);
var lyr_VIARHONA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONA_7, 
                style: style_VIARHONA_7,
                popuplayertitle: 'VIARHONA',
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_7.png" /> VIARHONA'
            });
var format_PlesousitessignalsdepuisViaRhna_8 = new ol.format.GeoJSON();
var features_PlesousitessignalsdepuisViaRhna_8 = format_PlesousitessignalsdepuisViaRhna_8.readFeatures(json_PlesousitessignalsdepuisViaRhna_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlesousitessignalsdepuisViaRhna_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlesousitessignalsdepuisViaRhna_8.addFeatures(features_PlesousitessignalsdepuisViaRhna_8);
var lyr_PlesousitessignalsdepuisViaRhna_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlesousitessignalsdepuisViaRhna_8, 
                style: style_PlesousitessignalsdepuisViaRhna_8,
                popuplayertitle: 'Pôles ou sites signalés depuis ViaRhôna',
                interactive: true,
                title: '<img src="styles/legend/PlesousitessignalsdepuisViaRhna_8.png" /> Pôles ou sites signalés depuis ViaRhôna'
            });
var format_ProjetdesignalisationVIARHONA_9 = new ol.format.GeoJSON();
var features_ProjetdesignalisationVIARHONA_9 = format_ProjetdesignalisationVIARHONA_9.readFeatures(json_ProjetdesignalisationVIARHONA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetdesignalisationVIARHONA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetdesignalisationVIARHONA_9.addFeatures(features_ProjetdesignalisationVIARHONA_9);
var lyr_ProjetdesignalisationVIARHONA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjetdesignalisationVIARHONA_9, 
                style: style_ProjetdesignalisationVIARHONA_9,
                popuplayertitle: 'Projet de signalisation VIARHONA',
                interactive: true,
                title: '<img src="styles/legend/ProjetdesignalisationVIARHONA_9.png" /> Projet de signalisation VIARHONA'
            });

lyr_Ortho20cm_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Tracrabattementvlo_2.setVisible(true);lyr_Tracrabattementauto_3.setVisible(true);lyr_Tracsdesitinrairesscurissdesortie_4.setVisible(true);lyr_AiredaccueilprincipaleVIARHONA_5.setVisible(true);lyr_VIARHONAPROJETTRACE_6.setVisible(true);lyr_VIARHONA_7.setVisible(true);lyr_PlesousitessignalsdepuisViaRhna_8.setVisible(true);lyr_ProjetdesignalisationVIARHONA_9.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_OpenStreetMap_1,lyr_Tracrabattementvlo_2,lyr_Tracrabattementauto_3,lyr_Tracsdesitinrairesscurissdesortie_4,lyr_AiredaccueilprincipaleVIARHONA_5,lyr_VIARHONAPROJETTRACE_6,lyr_VIARHONA_7,lyr_PlesousitessignalsdepuisViaRhna_8,lyr_ProjetdesignalisationVIARHONA_9];
lyr_Tracrabattementvlo_2.set('fieldAliases', {'GARE': 'GARE', 'TRAVAUX ?': 'TRAVAUX ?', 'JALONNEMEN': 'JALONNEMEN', 'REMARQUES': 'REMARQUES', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OP EPCI': 'OP EPCI', 'OP TERRAIN': 'OP TERRAIN', });
lyr_Tracrabattementauto_3.set('fieldAliases', {'AIRE': 'AIRE', 'REMARQUES': 'REMARQUES', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OPE': 'OPE', 'EXISTANT': 'EXISTANT', });
lyr_Tracsdesitinrairesscurissdesortie_4.set('fieldAliases', {'SITE SIGNA': 'SITE SIGNA', 'TRAVAUX': 'TRAVAUX', 'ANTENNE': 'ANTENNE', 'REMARQUES': 'REMARQUES', 'VARIANTE': 'VARIANTE', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OP EPCI': 'OP EPCI', 'OP TERRAIN': 'OP TERRAIN', });
lyr_AiredaccueilprincipaleVIARHONA_5.set('fieldAliases', {'NOM': 'NOM', 'PARKING VL': 'PARKING VL', 'NIVEAU': 'NIVEAU', 'RABATTEMEN': 'RABATTEMEN', 'TYPE AIRE': 'TYPE AIRE', });
lyr_VIARHONAPROJETTRACE_6.set('fieldAliases', {'id': 'id', 'statut': 'statut', });
lyr_VIARHONA_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'id': 'id', });
lyr_PlesousitessignalsdepuisViaRhna_8.set('fieldAliases', {'Nom': 'Nom', 'CC': 'CC', 'Commune': 'Commune', 'HIERARCHIS': 'HIERARCHIS', 'SUR VIARHO': 'SUR VIARHO', 'AMGT ?': 'AMGT ?', });
lyr_ProjetdesignalisationVIARHONA_9.set('fieldAliases', {'fid': 'fid', 'Type_d\'intervention': 'Type_d\'intervention', 'Itinéraire d\'implantation': 'Itinéraire d\'implantation', 'Fonction_de_la_signalisation': 'Fonction_de_la_signalisation', 'Type_de_signalisation': 'Type_de_signalisation', 'Département': 'Département', 'EPCI d\'implantation': 'EPCI d\'implantation', 'Commune d\'implantation': 'Commune d\'implantation', 'Voie d\'implantation': 'Voie d\'implantation', 'Gestionnaire de voirie': 'Gestionnaire de voirie', 'Zones_protégées': 'Zones_protégées', 'Photo': 'Photo', 'IDENTIFIANT': 'IDENTIFIANT', 'Code_panneau': 'Code_panneau', 'Sens_VIARHONA': 'Sens_VIARHONA', 'Type_panneau projeté': 'Type_panneau projeté', 'Typologie_signalisation projetée': 'Typologie_signalisation projetée', 'Sens_flèche': 'Sens_flèche', 'Idéogramme_SC2': 'Idéogramme_SC2', 'Logo_ViaRhôna': 'Logo_ViaRhôna', 'Logo_échappée': 'Logo_échappée', 'Mention 1': 'Mention 1', 'Km_1': 'Km_1', 'Idéogramme_site_signalé_1': 'Idéogramme_site_signalé_1', 'Mention_2': 'Mention_2', 'Km_2': 'Km_2', 'Idéogramme_site_signalé_2': 'Idéogramme_site_signalé_2', 'Mention_3': 'Mention_3', 'Km_3': 'Km_3', 'Idéogramme_site_signalé_3': 'Idéogramme_site_signalé_3', 'Mention_4': 'Mention_4', 'Km_4': 'Km_4', 'Idéogramme_site_signalé_4': 'Idéogramme_site_signalé_4', 'Type de support projeté': 'Type de support projeté', 'Dimension support projeté': 'Dimension support projeté', 'Couleur support projeté': 'Couleur support projeté', 'Dimension panneau projeté': 'Dimension panneau projeté', 'MAITRE D\'OUVRAGE': 'MAITRE D\'OUVRAGE', 'Dépose_support_existant': 'Dépose_support_existant', 'Pose_support_existant': 'Pose_support_existant', 'Pose_support_projet': 'Pose_support_projet', 'Dépose_Panneau_existant': 'Dépose_Panneau_existant', 'Repose_Panneau_existant': 'Repose_Panneau_existant', 'Pose_Panneau_projeté': 'Pose_Panneau_projeté', 'Pose_Marquage au sol': 'Pose_Marquage au sol', 'REMARQUE': 'REMARQUE', });
lyr_Tracrabattementvlo_2.set('fieldImages', {'GARE': 'TextEdit', 'TRAVAUX ?': 'TextEdit', 'JALONNEMEN': 'TextEdit', 'REMARQUES': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OP EPCI': 'TextEdit', 'OP TERRAIN': 'TextEdit', });
lyr_Tracrabattementauto_3.set('fieldImages', {'AIRE': 'TextEdit', 'REMARQUES': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OPE': 'TextEdit', 'EXISTANT': 'TextEdit', });
lyr_Tracsdesitinrairesscurissdesortie_4.set('fieldImages', {'SITE SIGNA': 'TextEdit', 'TRAVAUX': 'TextEdit', 'ANTENNE': 'TextEdit', 'REMARQUES': 'TextEdit', 'VARIANTE': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OP EPCI': 'TextEdit', 'OP TERRAIN': 'TextEdit', });
lyr_AiredaccueilprincipaleVIARHONA_5.set('fieldImages', {'NOM': 'TextEdit', 'PARKING VL': 'TextEdit', 'NIVEAU': 'TextEdit', 'RABATTEMEN': 'TextEdit', 'TYPE AIRE': 'TextEdit', });
lyr_VIARHONAPROJETTRACE_6.set('fieldImages', {'id': 'TextEdit', 'statut': '', });
lyr_VIARHONA_7.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'id': '', });
lyr_PlesousitessignalsdepuisViaRhna_8.set('fieldImages', {'Nom': 'TextEdit', 'CC': 'TextEdit', 'Commune': 'TextEdit', 'HIERARCHIS': 'TextEdit', 'SUR VIARHO': 'TextEdit', 'AMGT ?': 'TextEdit', });
lyr_ProjetdesignalisationVIARHONA_9.set('fieldImages', {'fid': 'TextEdit', 'Type_d\'intervention': 'TextEdit', 'Itinéraire d\'implantation': 'TextEdit', 'Fonction_de_la_signalisation': 'TextEdit', 'Type_de_signalisation': 'TextEdit', 'Département': 'TextEdit', 'EPCI d\'implantation': 'TextEdit', 'Commune d\'implantation': 'TextEdit', 'Voie d\'implantation': 'TextEdit', 'Gestionnaire de voirie': 'TextEdit', 'Zones_protégées': 'TextEdit', 'Photo': 'TextEdit', 'IDENTIFIANT': 'TextEdit', 'Code_panneau': 'TextEdit', 'Sens_VIARHONA': 'TextEdit', 'Type_panneau projeté': 'TextEdit', 'Typologie_signalisation projetée': 'TextEdit', 'Sens_flèche': 'TextEdit', 'Idéogramme_SC2': 'TextEdit', 'Logo_ViaRhôna': 'TextEdit', 'Logo_échappée': 'TextEdit', 'Mention 1': 'TextEdit', 'Km_1': 'TextEdit', 'Idéogramme_site_signalé_1': 'TextEdit', 'Mention_2': 'TextEdit', 'Km_2': 'TextEdit', 'Idéogramme_site_signalé_2': 'TextEdit', 'Mention_3': 'TextEdit', 'Km_3': 'TextEdit', 'Idéogramme_site_signalé_3': 'TextEdit', 'Mention_4': 'TextEdit', 'Km_4': 'TextEdit', 'Idéogramme_site_signalé_4': 'TextEdit', 'Type de support projeté': 'TextEdit', 'Dimension support projeté': 'TextEdit', 'Couleur support projeté': 'TextEdit', 'Dimension panneau projeté': 'TextEdit', 'MAITRE D\'OUVRAGE': 'TextEdit', 'Dépose_support_existant': 'TextEdit', 'Pose_support_existant': 'TextEdit', 'Pose_support_projet': 'TextEdit', 'Dépose_Panneau_existant': 'TextEdit', 'Repose_Panneau_existant': 'TextEdit', 'Pose_Panneau_projeté': 'TextEdit', 'Pose_Marquage au sol': 'TextEdit', 'REMARQUE': 'TextEdit', });
lyr_Tracrabattementvlo_2.set('fieldLabels', {'GARE': 'header label - visible with data', 'TRAVAUX ?': 'header label - visible with data', 'JALONNEMEN': 'header label - visible with data', 'REMARQUES': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OP EPCI': 'header label - visible with data', 'OP TERRAIN': 'header label - visible with data', });
lyr_Tracrabattementauto_3.set('fieldLabels', {'AIRE': 'header label - visible with data', 'REMARQUES': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OPE': 'header label - visible with data', 'EXISTANT': 'header label - visible with data', });
lyr_Tracsdesitinrairesscurissdesortie_4.set('fieldLabels', {'SITE SIGNA': 'header label - visible with data', 'TRAVAUX': 'header label - visible with data', 'ANTENNE': 'header label - visible with data', 'REMARQUES': 'header label - always visible', 'VARIANTE': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OP EPCI': 'header label - visible with data', 'OP TERRAIN': 'header label - visible with data', });
lyr_AiredaccueilprincipaleVIARHONA_5.set('fieldLabels', {'NOM': 'no label', 'PARKING VL': 'header label - visible with data', 'NIVEAU': 'header label - visible with data', 'RABATTEMEN': 'header label - visible with data', 'TYPE AIRE': 'inline label - visible with data', });
lyr_VIARHONAPROJETTRACE_6.set('fieldLabels', {'id': 'no label', 'statut': 'no label', });
lyr_VIARHONA_7.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'id': 'no label', });
lyr_PlesousitessignalsdepuisViaRhna_8.set('fieldLabels', {'Nom': 'no label', 'CC': 'no label', 'Commune': 'no label', 'HIERARCHIS': 'header label - visible with data', 'SUR VIARHO': 'inline label - always visible', 'AMGT ?': 'inline label - always visible', });
lyr_ProjetdesignalisationVIARHONA_9.set('fieldLabels', {'fid': 'no label', 'Type_d\'intervention': 'header label - visible with data', 'Itinéraire d\'implantation': 'inline label - always visible', 'Fonction_de_la_signalisation': 'inline label - visible with data', 'Type_de_signalisation': 'inline label - visible with data', 'Département': 'inline label - visible with data', 'EPCI d\'implantation': 'inline label - always visible', 'Commune d\'implantation': 'inline label - always visible', 'Voie d\'implantation': 'inline label - visible with data', 'Gestionnaire de voirie': 'inline label - visible with data', 'Zones_protégées': 'inline label - visible with data', 'Photo': 'inline label - visible with data', 'IDENTIFIANT': 'inline label - visible with data', 'Code_panneau': 'inline label - always visible', 'Sens_VIARHONA': 'inline label - visible with data', 'Type_panneau projeté': 'inline label - visible with data', 'Typologie_signalisation projetée': 'inline label - visible with data', 'Sens_flèche': 'inline label - visible with data', 'Idéogramme_SC2': 'inline label - visible with data', 'Logo_ViaRhôna': 'inline label - visible with data', 'Logo_échappée': 'inline label - visible with data', 'Mention 1': 'inline label - visible with data', 'Km_1': 'inline label - visible with data', 'Idéogramme_site_signalé_1': 'inline label - visible with data', 'Mention_2': 'inline label - visible with data', 'Km_2': 'inline label - visible with data', 'Idéogramme_site_signalé_2': 'inline label - visible with data', 'Mention_3': 'inline label - visible with data', 'Km_3': 'inline label - visible with data', 'Idéogramme_site_signalé_3': 'inline label - visible with data', 'Mention_4': 'inline label - visible with data', 'Km_4': 'inline label - visible with data', 'Idéogramme_site_signalé_4': 'inline label - visible with data', 'Type de support projeté': 'inline label - visible with data', 'Dimension support projeté': 'inline label - visible with data', 'Couleur support projeté': 'inline label - visible with data', 'Dimension panneau projeté': 'inline label - visible with data', 'MAITRE D\'OUVRAGE': 'inline label - visible with data', 'Dépose_support_existant': 'inline label - visible with data', 'Pose_support_existant': 'inline label - visible with data', 'Pose_support_projet': 'inline label - visible with data', 'Dépose_Panneau_existant': 'inline label - visible with data', 'Repose_Panneau_existant': 'inline label - visible with data', 'Pose_Panneau_projeté': 'inline label - visible with data', 'Pose_Marquage au sol': 'inline label - visible with data', 'REMARQUE': 'inline label - visible with data', });
lyr_ProjetdesignalisationVIARHONA_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});