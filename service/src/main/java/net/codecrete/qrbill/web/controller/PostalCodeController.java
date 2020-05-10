//
// Swiss QR Bill Generator
// Copyright (c) 2018 Manuel Bleichenbacher
// Licensed under MIT License
// https://opensource.org/licenses/MIT
//
package net.codecrete.qrbill.web.controller;

import net.codecrete.qrbill.web.model.PostalCode;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostalCodeController {

    private final PostalCodeData postalCodeData;

    /**
     * Creates an instance.
     * <p>
     * Single constructor for Spring dependency injection.
     * </p>
     */
    public PostalCodeController(PostalCodeData postalCodeData) {
        this.postalCodeData = postalCodeData;
    }

    @RequestMapping(value = "/postal-codes/suggest")
    @ResponseBody
    public PostalCode[] suggestPostalCodes(@RequestParam(name = "country", defaultValue = "") String country,
                                           @RequestParam("substring") String substring) {

        // get postal code
        List<PostalCodeData.PostalCode> postalCodeList = postalCodeData.suggestPostalCodes(country, substring);

        // convert result into API data structure
        int len = postalCodeList.size();
        PostalCode[] postalCodes = new PostalCode[len];
        for (int i = 0; i < len; i++) {
            PostalCode pc = new PostalCode();
            pc.setPostalCode(postalCodeList.get(i).code);
            pc.setTown(postalCodeList.get(i).town);
            postalCodes[i] = pc;
        }
        return postalCodes;
    }
}
