#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const glob = require('glob');

// Initialize AJV with formats
const ajv = new Ajv({ allErrors: true, verbose: true });
addFormats(ajv);

function validateSchema(schemaPath) {
    try {
        console.log(`Validating schema: ${schemaPath}`);
        
        // Read and parse schema
        const schemaContent = fs.readFileSync(schemaPath, 'utf8');
        const schema = JSON.parse(schemaContent);
        
        // Compile schema to check for syntax errors
        const validate = ajv.compile(schema);
        
        console.log(`✓ Schema ${path.basename(schemaPath)} is valid`);
        return true;
    } catch (error) {
        console.error(`✗ Error in schema ${path.basename(schemaPath)}:`);
        console.error(`  ${error.message}`);
        return false;
    }
}

function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage: node validate-schema.js <schema-file-or-directory>');
        console.log('Examples:');
        console.log('  node validate-schema.js schemas/PACT_methodology/schema.json');
        console.log('  node validate-schema.js schemas/PACT_methodology/');
        console.log('  node validate-schema.js schemas/');
        process.exit(1);
    }
    
    const target = args[0];
    let schemaFiles = [];
    
    if (fs.statSync(target).isDirectory()) {
        // Find all .json files in directory
        const pattern = path.join(target, '**/*.json');
        schemaFiles = glob.sync(pattern);
    } else {
        schemaFiles = [target];
    }
    
    if (schemaFiles.length === 0) {
        console.log('No schema files found');
        process.exit(1);
    }
    
    console.log(`Found ${schemaFiles.length} schema file(s) to validate\\n`);
    
    let validCount = 0;
    let totalCount = 0;
    
    for (const schemaFile of schemaFiles) {
        totalCount++;
        if (validateSchema(schemaFile)) {
            validCount++;
        }
        console.log(''); // Empty line for readability
    }
    
    console.log(`Validation complete: ${validCount}/${totalCount} schemas valid`);
    
    if (validCount !== totalCount) {
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { validateSchema };
