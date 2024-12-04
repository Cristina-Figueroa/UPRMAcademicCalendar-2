# Route initialization
from .holidays import bp as holidays_bp
from .guidelines import bp as guidelines_bp
from .academicPeriod import bp as academicPeriod_bp
from .download import bp as download_bp

__all__ = ['holidays_bp', 'guidelines_bp', 'academicPeriod_bp', 'download_bp']
