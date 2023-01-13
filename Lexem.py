"""
Model exported as python.
Name : Lexem
Group : Cerema
With QGIS : 32802
"""

from qgis.core import QgsProcessing
from qgis.core import QgsProcessingAlgorithm
from qgis.core import QgsProcessingMultiStepFeedback
from qgis.core import QgsProcessingParameterField
from qgis.core import QgsProcessingParameterFile
from qgis.core import QgsProcessingParameterString
from qgis.core import QgsProcessingParameterFileDestination
from qgis.core import QgsProcessingParameterMapLayer
from PyQt5.QtCore import QCoreApplication
import processing
import io


class Lexem(QgsProcessingAlgorithm):

    def initAlgorithm(self, config=None):
        self.addParameter(QgsProcessingParameterMapLayer('couche_geographique', self.tr('Zones layer'), types=[QgsProcessing.TypeVector,QgsProcessing.TypeMapLayer], defaultValue=None))
        self.addParameter(QgsProcessingParameterField('code', self.tr('Code'), type=QgsProcessingParameterField.Any, parentLayerParameterName='couche_geographique', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterField('label', self.tr('Zone label'), type=QgsProcessingParameterField.Any, parentLayerParameterName='couche_geographique', allowMultiple=False, defaultValue=None))
        self.addParameter(QgsProcessingParameterString('name', self.tr('Label name'), multiLine=False, defaultValue=''))
        self.addParameter(QgsProcessingParameterString('title', self.tr('Label title'), multiLine=False, defaultValue=''))
        self.addParameter(QgsProcessingParameterString('other', 'other =', multiLine=False, defaultValue='autre'))
        self.addParameter(QgsProcessingParameterFile('folder', self.tr('Output folder'), defaultValue=None,behavior=QgsProcessingParameterFile.Behavior.Folder))

    def processAlgorithm(self, parameters, context, model_feedback):
        # Use a multi-step feedback, so that individual child algorithm progress reports are adjusted for the
        # overall progress through the model
        feedback = QgsProcessingMultiStepFeedback(0, model_feedback)
        table_zones=self.parameterAsLayer(parameters,"couche_geographique",context)
        code=self.parameterAsFields(parameters,'code',context)[0]
        libelle=self.parameterAsFields(parameters,'label',context)[0]
        nom_libelle=self.parameterAsString(parameters,'name',context)
        titre=self.parameterAsString(parameters,'title',context)
        autre=self.parameterAsString(parameters,'other',context)
        repertoire=self.parameterAsFile(parameters,'folder',context)
        
        zones=table_zones.getFeatures()

        fields=table_zones.fields()
        code_type=fields[fields.indexFromName(code)].typeName()

        nom_sortie=repertoire+ '/'+nom_libelle+'FMT.'
        fichier_sortie=io.open(repertoire+ '/'+ nom_libelle+'FMT.','w',encoding='utf8')
        fichier_sortie.write('/*'+'{: <40}'.format(titre)+'*/\n')
        fichier_sortie.write('proc format library=library;\n')
        fichier_sortie.write('value '+nom_libelle+'\n')
        
        for z in zones:
            if code_type=='String':
                fichier_sortie.write('"'+str(z[code]) +'" = "' +str(z[libelle])+'"\n')
            else:
                fichier_sortie.write(str(z[code]) +' = "' +str(z[libelle])+'"\n')
        fichier_sortie.write('other = "' +autre+'"\n')    
        fichier_sortie.write(';run;\n')
        fichier_sortie.close()
        
        results = {'OUTPUT': nom_sortie}
        outputs = {}

        return results

    def name(self):
        return 'Lexem'

    def displayName(self):
        return self.tr('Lexem labels')

    def group(self):
        return 'Cerema'

    def groupId(self):
        return ''
    
    def tr(self, string, context=''):
        if context == '':
            context = self.__class__.__name__
        return QCoreApplication.translate(context, string)

    def createInstance(self):
        return Lexem()
        
    def shortHelpString(self):
        return self.tr("""
        Algorithm to generate Sas labels from geographic layer in order to build custom geographic clusters . 
        
        The tool needs a polygon layer (zones) with and Id and the corresponding label
        
        Parameters:
            Zones layer: a polygon layer with fields containg the Id of zones and the labels of zones.
            Code: the Ids of zones
            Zone label : zone label field 
            Label name: name of the SAS variable format. I will be followed by FMT for the file name
            Label title: Sas variable label title
            Other= : modality for other values
            Output folder: directory in which save the file
        """)

