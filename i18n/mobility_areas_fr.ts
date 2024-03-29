<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>Lexem</name>
    <message>
        <location filename="Lexem.py" line="24"/>
        <source>Zones layer</source>
        <translation>Zones</translation>
    </message>
    <message>
        <location filename="Lexem.py" line="25"/>
        <source>Code</source>
        <translation>Code</translation>
    </message>
    <message>
        <location filename="Lexem.py" line="26"/>
        <source>Zone label</source>
        <translation>Libellé de la zone</translation>
    </message>
    <message>
        <location filename="Lexem.py" line="27"/>
        <source>Label name</source>
        <translation>Nom de la variable libellé</translation>
    </message>
    <message>
        <location filename="Lexem.py" line="28"/>
        <source>Label title</source>
        <translation>Titre du libellé</translation>
    </message>
    <message>
        <location filename="Lexem.py" line="30"/>
        <source>Output folder</source>
        <translation>Répertoire de sortie</translation>
    </message>
    <message>
        <location filename="Lexem.py" line="73"/>
        <source>Lexem labels</source>
        <translation>Libellés Lexem</translation>
    </message>
    <message>
        <location filename="Lexem.py" line="90"/>
        <source>
        Algorithm to generate Sas labels from geographic layer in order to build custom geographic clusters . 
        
        The tool needs a polygon layer (zones) with and Id and the corresponding label
        
        Parameters:
            Zones&#xa0;layer: a polygon layer with fields containg the Id of zones and the labels of zones.
            Code: the Ids of zones
            Zone label&#xa0;: zone label field 
            Label name: name of the SAS variable format. I will be followed by FMT for the file name
            Label title: Sas variable label title
            Other= : modality for other values
            Output folder: directory in which save the file
        </source>
        <translation>       Algorithme pour générer des liebeléls SAS à partir d&apos;une couche géographique pour construire des zonage personnalisés. 
        
        L&apos;outil nécessite une couche géographique de polygones (zones) avec des colonnes identifiants de zones et libellé de la zone
        
        Paramètres:
            Zones: une couche de polygones avec des champs comprenant l&apos;Id et le libellé des zones 
            Code: l&apos;identifiant de la zone
            Libellé de la zone : Le champ liebllé de zone
            Nom de la variable libellé: nom du libellé  SAS. Il sera complété par FMT pour le nom de fichier
            Titre du libellé: Titre du libellé SAS
            Other= : modalité pour les valeurs autres
            Répertoire de sortier: Répertoire ou sera écrit le libellé SAS
        </translation>
    </message>
</context>
<context>
    <name>MobilityAreas</name>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="45"/>
        <source>Zones</source>
        <translation>Zones</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="46"/>
        <source>Zone Id</source>
        <translation>Identifiant de zone</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="47"/>
        <source>Zone label</source>
        <translation>Libellé de la zone</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="48"/>
        <source>Origin/Destination file</source>
        <translation>Fichier Origine/Destination</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="49"/>
        <source>Origin</source>
        <translation>Origine</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="50"/>
        <source>Destination</source>
        <translation>Destination</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="51"/>
        <source>Value</source>
        <translation>Valeur</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="52"/>
        <source>Field separator</source>
        <translation>Séparateur de champ</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="55"/>
        <source>Minimum pole size</source>
        <translation>Taille minimale des pôles</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="56"/>
        <source>Max aggregation size</source>
        <translation>Taille maximale des pôles pour agrégation</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="57"/>
        <source>Maximum link</source>
        <translation>Lien maximum pour agrégation</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="61"/>
        <source>Output</source>
        <translation>Résultat</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="105"/>
        <source>step;zone;pole;link;internal;total
</source>
        <translation>etape;zone;pole;lien;interne;total</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="112"/>
        <source>Generating neighbourhood table...</source>
        <translation>Génération de la table de voisinage...</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="116"/>
        <source>Generating zones data...</source>
        <translation>Génération des données de zones...</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="125"/>
        <source>Importing data...</source>
        <translation>Import des données...</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="154"/>
        <source>Building cluster areas...</source>
        <translation>Elaboration des bassins de mobilité...</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="451"/>
        <source>
        Algorithm to build incrementally mobility cluster areas based on OD trips data between zones. 
        It aggregates successively zones that have the strongest link until it remains only one area
        The result is a polygon layer reresenting allz ones and areas aggregated in the processs with 
        their associated time of creation and time of deletion that allow animated maps from the different aggregation steps
        with the QGis time manager
        
        The tool needs a od trips data (txt file separated with &apos;;&apos;)
        A polygon layer (zones) with and Id that correspond to origin and destination Ids in the od trips data file
        
        Parameters:
            Zones&#xa0;: a polygon layer with a field containg the Id of zones
            Zone Id&#xa0;: zone Id field
            Zone label&#xa0;: zone label field (if no zone label , choose zone Id)
            Origin/destination file&#xa0;: OD trips data file. txt file with origin and destination fields corresponding to zone ID
            Origin: Name of the origin column
            Destination: name of the destination column
            Value: Name of the value column
            Field separator: Field separator . &apos;;&apos; by default
            Minimum pole size&#xa0;: the minimum size for becoming a pole
            Max agregation size: The maximum size to be able to be agregated
            Maximum link: A stop criteria on the maximum link (0.01 = 1% of the trips are going to the pole area)
            Ouput: The polygon layer result table (contains resultst from each step of the algorithm for further dynamic analysis with temporal manager)
            
        </source>
        <translation type="obsolete">        Algorithme pour construirer de manière itérative des bassins de mobilité à partir de données origine/destination entre zones
        Il agrège de manière itérative les zones qui ont la plus frte dépendance entre elles jusqu&apos;à ce qu&apos;il ne reste plus de zones à agréger
        Le résultat est une couches de polygones qui représentent les zones et bassins de mobilité  agrégés tout au long du processus
        avec comme données associées les heure de création et de supprression de chaque objets permettant de faire de cartes animées  en fonction de sdifférentes étapes
        avec le contrôleur temporel de Qgis
        The tool needs a od trips data (txt file separated with &apos;;&apos;)
        L&apos;outil nécessite de données de déplacements OD (fichier txt separaté avec &apos;;&apos;)
        Une couche de polygons (zones) contenant un identifiant correspondant à celui des origines et destination du fichier OD

        
        Paramètres:
            Zones : Une couche de polygones représentant les zones
            Identifiant de zone : Identifiant de zone
            Libellé de la zone : Libellé de la zone (si aucun prendre l&apos;identifiant de zone)
            Fichier Origine/destination file : Fichier txt des déplacements OD disposant d&apos;un champ correspondant à l&apos;identifiant de zone
            Origine: Nom de la colonne origin
            Destination: Nom de la colonne destination
            Valeur: Nom de la colonne valeur
            Séparateur de champ: Séparateur de champ &apos;;&apos; par défaut
            Taille minimale de pôle :La taille minimale pour être un pôle
            Minimum pole size : the minimum size for becoming a pole
            Taille maximale d&apos;agrégation: Taille maximale au delà de laquelle la zone ne pourra pas être agrégée
            Lien maximum: Un des critères d&apos;arrêt de l&apos;aortihme. Lien maximal en dessous duquel la zone ne peut être agrégée au pôle
            Résultat: La table de polygones résultat (contient les résultats de chaque étape de l&apos;algorithme pour une analyse future avec la manageur temporel de QGis)
            
        </translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="474"/>
        <source>Mobility Areas</source>
        <translation>Bassins de mobilité</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="59"/>
        <source>Neighbourhood constraint</source>
        <translation>Contrainte de voisinage</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="467"/>
        <source>
        Algorithm to build incrementally mobility cluster areas based on OD trips data between zones. 
        It aggregates successively zones that have the strongest link until it remains only one area
        The result is a polygon layer reresenting allz ones and areas aggregated in the processs with 
        their associated time of creation and time of deletion that allow animated maps from the different aggregation steps
        with the QGis time manager
        
        The tool needs a od trips data (txt file separated with &apos;;&apos;)
        A polygon layer (zones) with and Id that correspond to origin and destination Ids in the od trips data file
        
        Parameters:
            Zones&#xa0;: a polygon layer with a field containg the Id of zones
            Zone Id&#xa0;: zone Id field
            Zone label&#xa0;: zone label field (if no zone label , choose zone Id)
            Origin/destination file&#xa0;: OD trips data file. txt file with origin and destination fields corresponding to zone ID
            Origin: Name of the origin column
            Destination: name of the destination column
            Value: Name of the value column
            Field separator: Field separator . &apos;;&apos; by default
            Minimum pole size&#xa0;: the minimum size for becoming a pole
            Max agregation size: The maximum size to be able to be agregated
            Maximum link: A stop criteria on the maximum link (0.01 = 1% of the trips are going to the pole area)
            Neighbourhood constraint: if true a zone can be agregated only if it intersects the pole area (that implies no island in pole areas)
            Secondary poles: If checkes, secondary poles, that could be masqued by main poles, may appear
            Ouput: The polygon layer result table (contains resultst from each step of the algorithm for further dynamic analysis with temporal manager)
            
        </source>
        <translation type="obsolete">        Algorithme pour construirer de manière itérative des bassins de mobilité à partir de données origine/destination entre zones
        Il agrège de manière itérative les zones qui ont la plus frte dépendance entre elles jusqu&apos;à ce qu&apos;il ne reste plus de zones à agréger
        Le résultat est une couches de polygones qui représentent les zones et bassins de mobilité  agrégés tout au long du processus
        avec comme données associées les heure de création et de supprression de chaque objets permettant de faire de cartes animées  en fonction de sdifférentes étapes
        avec le contrôleur temporel de Qgis
        The tool needs a od trips data (txt file separated with &apos;;&apos;)
        L&apos;outil nécessite de données de déplacements OD (fichier txt separaté avec &apos;;&apos;)
        Une couche de polygons (zones) contenant un identifiant correspondant à celui des origines et destination du fichier OD

        
        Paramètres:
            Zones : Une couche de polygones représentant les zones
            Identifiant de zone : Identifiant de zone
            Libellé de la zone : Libellé de la zone (si aucun prendre l&apos;identifiant de zone)
            Fichier Origine/destination file : Fichier txt des déplacements OD disposant d&apos;un champ correspondant à l&apos;identifiant de zone
            Origine: Nom de la colonne origin
            Destination: Nom de la colonne destination
            Valeur: Nom de la colonne valeur
            Séparateur de champ: Séparateur de champ &apos;;&apos; par défaut
            Taille minimale de pôle :La taille minimale pour être un pôle
            Minimum pole size : the minimum size for becoming a pole
            Taille maximale d&apos;agrégation: Taille maximale au delà de laquelle la zone ne pourra pas être agrégée
            Lien maximum: Un des critères d&apos;arrêt de l&apos;aortihme. Lien maximal en dessous duquel la zone ne peut être agrégée au pôle
............Contrainte de voisinage: Si coché, la zone ne peut être agregée au pôle que si elle l&apos;intersecte
............Pôles econdaires: Si coché, des pôles econdaires masqués par l&apos;attractiivité des pôles principaux peuvent apparaître
            Résultat: La table de polygones résultat (contient les résultats de chaque étape de l&apos;algorithme pour une analyse future avec la manageur temporel de QGis)
            
        </translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="60"/>
        <source>Secondary poles</source>
        <translation>Pôles secondaires</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="54"/>
        <source>Filter</source>
        <translation>Filtre</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="497"/>
        <source>
        Algorithm to build incrementally mobility cluster areas based on OD trips data between zones. 
        It aggregates successively zones that have the strongest link until it remains only one area
        The result is a polygon layer reresenting allz ones and areas aggregated in the processs with 
        their associated time of creation and time of deletion that allow animated maps from the different aggregation steps
        with the QGis time manager
        
        The tool needs a od trips data (txt file separated with &apos;;&apos;)
        A polygon layer (zones) with and Id that correspond to origin and destination Ids in the od trips data file
        
        Parameters:
            Zones&#xa0;: a polygon layer with a field containg the Id of zones
            Zone Id&#xa0;: zone Id field
            Zone label&#xa0;: zone label field (if no zone label , choose zone Id)
            Origin/destination file&#xa0;: OD trips data file. txt file with origin and destination fields corresponding to zone ID
            Origin: Name of the origin column
            Destination: name of the destination column
            Value: Name of the value column
            Field separator: Field separator . &apos;;&apos; by default
            Filter: OD trips data filter in pandas syntax
            Minimum pole size&#xa0;: the minimum size for becoming a pole
            Max agregation size: The maximum size to be able to be agregated
            Maximum link: A stop criteria on the maximum link (0.01 = 1% of the trips are going to the pole area)
            Neighbourhood constraint: if true a zone can be agregated only if it intersects the pole area (that implies no island in pole areas)
            Secondary poles: If checkes, secondary poles, that could be masqued by main poles, may appear
            Ouput: The polygon layer result table (contains resultst from each step of the algorithm for further dynamic analysis with temporal manager)
            
        </source>
        <translation>        Algorithme pour construirer de manière itérative des bassins de mobilité à partir de données origine/destination entre zones
        Il agrège de manière itérative les zones qui ont la plus frte dépendance entre elles jusqu&apos;à ce qu&apos;il ne reste plus de zones à agréger
        Le résultat est une couches de polygones qui représentent les zones et bassins de mobilité  agrégés tout au long du processus
        avec comme données associées les heure de création et de supprression de chaque objets permettant de faire de cartes animées  en fonction de sdifférentes étapes
        avec le contrôleur temporel de Qgis
        The tool needs a od trips data (txt file separated with &apos;;&apos;)
        L&apos;outil nécessite de données de déplacements OD (fichier txt separaté avec &apos;;&apos;)
        Une couche de polygons (zones) contenant un identifiant correspondant à celui des origines et destination du fichier OD

        
        Paramètres:
            Zones : Une couche de polygones représentant les zones
            Identifiant de zone : Identifiant de zone
            Libellé de la zone : Libellé de la zone (si aucun prendre l&apos;identifiant de zone)
            Fichier Origine/destination file : Fichier txt des déplacements OD disposant d&apos;un champ correspondant à l&apos;identifiant de zone
            Origine: Nom de la colonne origin
            Destination: Nom de la colonne destination
            Valeur: Nom de la colonne valeur
            Séparateur de champ: Séparateur de champ &apos;;&apos; par défaut
            Filtre: Filtre des données source (origine/destination) en syntaxe Pandas
            Taille minimale de pôle :La taille minimale pour être un pôle
            Minimum pole size : the minimum size for becoming a pole
            Taille maximale d&apos;agrégation: Taille maximale au delà de laquelle la zone ne pourra pas être agrégée
            Lien maximum: Un des critères d&apos;arrêt de l&apos;aortihme. Lien maximal en dessous duquel la zone ne peut être agrégée au pôle
............Contrainte de voisinage: Si coché, la zone ne peut être agregée au pôle que si elle l&apos;intersecte
............Pôles econdaires: Si coché, des pôles econdaires masqués par l&apos;attractiivité des pôles principaux peuvent apparaître
            Résultat: La table de polygones résultat (contient les résultats de chaque étape de l&apos;algorithme pour une analyse future avec la manageur temporel de QGis)
            
        </translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="53"/>
        <source>Decimal separator</source>
        <translation>Séparateur décimal</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="58"/>
        <source>Max autonomy rate</source>
        <translation>Pourcentage d&apos;autonomie max</translation>
    </message>
</context>
<context>
    <name>MobilityAreasProvider</name>
    <message>
        <location filename="MobilityAreas_provider.py" line="103"/>
        <source>Cerema</source>
        <translation>Cerema</translation>
    </message>
</context>
</TS>
