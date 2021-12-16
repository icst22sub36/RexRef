# Rex Stepper

Rex Stepper is an advanced online debugger for Javascript regular expressions, allowing users to Code-Step through a given match.

## Installation

1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone the project
3. Install dependencies in the main directory (where the file 'package.json' is located)
    ```bash
    npm install
    ```

## Usage

1. node --experimental-modules --es-module-specifier-resolution=node index.js [file.js] [output_folder]
2. node --experimental-modules --es-module-specifier-resolution=node [output_folder]/[file_compiled.js]

## Testing with Test262 suite

1. Navigate to the source directory of the project
1. **Compile tests**

```py
python3 compileTests.py [tests_dir] --test262 tests/Test262/harness
```

[tests_dir] - directory containing the tests to compile. In order to compile all tests, use  
tests_dir = tests/Test262/test

#####

2. **Run tests**

```py
python3 runTests.py
```

3. **Results will be shown in the terminal**
