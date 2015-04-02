from eve import Eve
app = Eve(settings='settings.py')

if __name__ == '__main__':
    app.run(port=3000, debug=True)
