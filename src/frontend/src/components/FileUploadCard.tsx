import {Button, FormGroup, Input, InputGroup} from "reactstrap";
import * as React from "react";

export const FileUploadCard = (props: any) => (
    <div>
        <div className="mb-2 mt-3">Upload a photo of your coins</div>
        <FormGroup>
            <div className="mb-1">
                <InputGroup>
                    <Input
                        onChange={props.onFileChange}
                        id="uploadedFile"
                        name="file"
                        type="file"
                    />
                    <Button type="submit" onClick={props.onFileUpload} style={{backgroundColor: "#50A"}}>Upload</Button>
                </InputGroup>
            </div>
            <div>
                <small className="text-muted">Supported file extensions are: png, jpeg, jpg.</small>
            </div>
        </FormGroup>
    </div>
);