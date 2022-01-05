# -*- coding: utf-8 -*-

"""
/***************************************************************************
 MobilityAreas
                                 A QGIS plugin
 This plugin build dynamic mobility areas based on origin destination data
 Generated by Plugin Builder: http://g-sherman.github.io/Qgis-Plugin-Builder/
                              -------------------
        begin                : 2021-08-05
        copyright            : (C) 2021 by Patrick Palmier/Cerema Hauts-de-France
        email                : patrick.palmier@cerema.fr
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
"""

__author__ = 'Patrick Palmier/Cerema Hauts-de-France'
__date__ = '2021-08-05'
__copyright__ = '(C) 2021 by Patrick Palmier/Cerema Hauts-de-France'

# This will get replaced with a git SHA1 when you do a git archive

__revision__ = '$Format:%H$'

import os
from qgis.PyQt.QtCore import QSettings, QTranslator, QCoreApplication
from qgis.PyQt.QtWidgets import QApplication,QMenu,QAction
from qgis.core import QgsProcessingProvider,QgsApplication
from processing.core.Processing import Processing
from processing.core.ProcessingConfig import ProcessingConfig, Setting
from qgis.core import QgsProcessingProvider
from .MobilityAreas_algorithm import MobilityAreas
from qgis.PyQt.QtGui import QIcon

pluginPath = os.path.dirname(__file__)

class MobilityAreasProvider(QgsProcessingProvider):

    def __init__(self):
        """
        Default constructor.
        """
        QgsProcessingProvider.__init__(self)

    def unload(self):
        """
        Unloads the provider. Any tear-down steps required by the provider
        should be implemented here.
        """
        pass

    def loadAlgorithms(self):
        """
        Loads all algorithms belonging to this provider.
        """
        self.addAlgorithm(MobilityAreas())
        # add additional algorithms here
        # self.addAlgorithm(MyOtherAlgorithm())
        self.plugin_dir = os.path.dirname(__file__)
        # initialize locale
        locale = QSettings().value('locale/userLocale')
        
        if locale==None:
            locale='en'
        else: 
            locale=locale[-2:]
        
        locale_path = os.path.join(
            self.plugin_dir,
            'i18n',
            'mobility_areas_{0}.qm'.format(locale))

        if os.path.exists(locale_path):
            self.translator = QTranslator()
            self.translator.load(locale_path)
            QCoreApplication.installTranslator(self.translator)

    def id(self):
        """
        Returns the unique provider id, used for identifying the provider. This
        string should be a unique, short, character only string, eg "qgis" or
        "gdal". This string should not be localised.
        """
        return 'Cerema'

    def name(self):
        """
        Returns the provider name, which is used to describe the provider
        within the GUI.

        This string should be short (e.g. "Lastools") and localised.
        """
        return self.tr('Cerema')

    def icon(self):
        """
        Should return a QIcon which is used for your provider inside
        the Processing toolbox.
        """
        return QIcon(os.path.join(pluginPath, "icons", "cerema.png"))
        

    def longName(self):
        """
        Returns the a longer version of the provider name, which can include
        extra details such as version numbers. E.g. "Lastools LIDAR tools
        (version 2.2.1)". This string should be localised. The default
        implementation returns the same string as name().
        """
        return self.name()