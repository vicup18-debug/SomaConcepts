import os
import glob

html_files = glob.glob('*.html')

for file in html_files:
    if file == 'about.html': continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add to nav
    if '<a href="about.html">About Us</a>' not in content:
        content = content.replace(
            '<a href="investors.html">Investors</a>\n            </nav>',
            '<a href="investors.html">Investors</a>\n                <a href="about.html">About Us</a>\n            </nav>'
        )
        
    # Add to footer Corporate
    if '<li><a href="about.html">About Us</a></li>' not in content:
        content = content.replace(
            '<ul>\n                    <li><a href="calculator.html">Leakage Calculator</a></li>',
            '<ul>\n                    <li><a href="about.html">About Us</a></li>\n                    <li><a href="calculator.html">Leakage Calculator</a></li>'
        )
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
