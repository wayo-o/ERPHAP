@echo off
REM HomeAir Plus - Queue Worker
REM Run this in a separate terminal to process background jobs (emails, PDFs, etc.)
REM Stop with Ctrl+C. Restart after deploying code changes.

cd /d "%~dp0"
echo Starting queue worker...
echo Press Ctrl+C to stop.
echo.
php artisan queue:work database --tries=3 --timeout=120 --sleep=3 --max-jobs=1000 --max-time=3600
pause
