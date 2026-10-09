/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Squid Web Cache", "index.html", [
    [ "Squid Developer Programming Guide", "index.html", "index" ],
    [ "Message IDs and gists for cache_log_message", "ControlledCacheLogMessages.html", null ],
    [ "Coding and Other Conventions used in Squid", "Conventions.html", [
      [ "Code Conventions", "Conventions.html#Coding", null ],
      [ "Fixed Width types", "Conventions.html#FWT", null ],
      [ "Documentation Conventions", "Conventions.html#Documentation", [
        [ "API vs Internal Component Commenting", "Conventions.html#CommentComponents", null ],
        [ "Function/Method Comments", "Conventions.html#FunctionComments", [
          [ "Function Parameters", "Conventions.html#PARAM", null ],
          [ "Return Values", "Conventions.html#RETVAL", null ],
          [ "Function Actions / Internal Flows", "Conventions.html#FLOW", null ]
        ] ]
      ] ]
    ] ],
    [ "Flow of a Typical Request", "05_TypicalRequestFlow.html", null ],
    [ "Delay Pools", "10_DelayPools.html", [
      [ "Introduction", "10_DelayPools.html#DelayPoolsIntro", null ],
      [ "Extending Delay Pools", "10_DelayPools.html#ExtendingDelayPools", null ],
      [ "Neat things that could be done.", "10_DelayPools.html#NeatExtensions", null ]
    ] ],
    [ "Callback Data Allocator API", "CBDATA.html", [
      [ "Introduction", "CBDATA.html#CbDataIntro", null ],
      [ "Examples", "CBDATA.html#Examples", [
        [ "Asynchronous operation without cbdata, showing why cbdata is needed", "CBDATA.html#AsyncOpWithoutCBDATA", null ],
        [ "Asynchronous operation with cbdata", "CBDATA.html#AsyncOpWithCBDATA", null ],
        [ "Asynchronous operation cancelled by cbdata", "CBDATA.html#AsynchronousOpCancelledByCBDATA", null ],
        [ "Adding a new cbdata registered type", "CBDATA.html#AddingCBDATAType", null ]
      ] ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Topics", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"05_TypicalRequestFlow.html",
"BlockingDiskIOModule_8cc.html",
"ChildConfig_8h.html",
"DestinationIp_8h_source.html",
"FdNotes_8h.html#a08603c9424a847b7951bb043ed92c6d7a94a6de559e17ce534c152883d7b58663",
"Handshake_8cc.html#a7031a15e600053e581873d90c6eb91bbaa7a7b1bc7de10e0151d537436ceec840",
"HttpRepHeader_8h.html",
"Ip_8h.html",
"MemMap_8h.html",
"ModXact_8cc_source.html",
"ProtocolData_8h.html",
"RegisteredHeaders_8h.html#a92faa3c60e0b457c167759389ae061a4ad15c8839ee936e050b9d9f6d438076b2",
"ServiceGroups_8cc_source.html",
"StoreFileSystem_8cc.html",
"TimeData_8cc.html#a4e88e222428257b21653a1ab11c2b3f1",
"access__log_8cc_source.html",
"aiops__win32_8cc.html#a0749b1d846a641d83cbeb9e334edfe16",
"auth_2negotiate_2Config_8cc.html#ab9cba2ab96858687e7af118afd06020a",
"autoconf_8h.html#a9ff3f52037bd863890b862d86fb9b6cf",
"basic__ldap__auth_8cc.html#abd8c0390b9b465cc480fbd834d11f230",
"cache__cf_8cc.html#a8ff3fdb3bb2ea66ddc113d5b985e9793",
"cf__gen_8cc.html#a7cb1a8851cd006678f3a26d38e047747",
"classACLEui64.html#a8c749b4a7e198dea9773ae7b69760d3c",
"classACLHierCodeData.html#a369f2e98ec700f97fc706a0df7acd1c3",
"classACLRandom.html#a7230be79e9bb0808926cf08bf9a31a80",
"classAclDenyInfoList.html#a3452be1a5bf969a036c652c11fef002d",
"classAcl_1_1AnnotateClientCheck.html#a3cc400c3de702cd6ae4c156054f53fa1",
"classAcl_1_1AnyOf.html#a8b044a23a1e5c743903147b2b8269929",
"classAcl_1_1ClientCertificateCheck.html#abce51c72dd733d1a5c20987129f6a960",
"classAcl_1_1DestinationDomainCheck.html#a993910f5587604c5796811fe40fa61a0",
"classAcl_1_1HttpReqHeaderCheck.html#a494de24fc8c89a996fac504bcc780385",
"classAcl_1_1MyPortNameCheck.html#a264f37e11009fa3c56b2096ac4b160d0",
"classAcl_1_1Option.html#ad0e144545ac3ec583e4049f0cb496324",
"classAcl_1_1PeerNameCheck.html#a3487939f5205e498d21d4450abc713f5",
"classAcl_1_1ServerCertificateCheck.html#a264f37e11009fa3c56b2096ac4b160d0",
"classAcl_1_1SourceDomainCheck.html#aefb8064c78e31f5eb317caadef04d757",
"classAcl_1_1Tree.html#a3831a9bca845b0105dd8e204b333a2d6",
"classAcl_1_1UrlPathCheck.html#a0a99ab98beb358712bb185fff5e7a078",
"classAdaptation_1_1Answer.html#af44812656a39cb00ef867fb6ebbf8057",
"classAdaptation_1_1Ecap_1_1Config.html#a73969ea3a10fe42fa35410c3a3d08bc1",
"classAdaptation_1_1Ecap_1_1ServiceConfig.html#a9770112f06a58121111b73e86b0034ec",
"classAdaptation_1_1Ecap_1_1XactionRep.html#ab3404325c7d2830d327dfd3f9d97cf85",
"classAdaptation_1_1Icap_1_1ConnWaiterDialer.html#ab07c8d284d9a59f7be7cbb6ba4a9cc86",
"classAdaptation_1_1Icap_1_1ModXact.html#a41d4cabc1fa0ebf09d177f0b1ca885ef",
"classAdaptation_1_1Icap_1_1ModXact.html#ae3b63ce99d04007112e36d55f3df2e73",
"classAdaptation_1_1Icap_1_1OptXact.html#a3303671e847860e5a9a35b1b47fa47ce",
"classAdaptation_1_1Icap_1_1Options.html#a1696479ad59bcfcdac31ea7a6950a652",
"classAdaptation_1_1Icap_1_1ServiceRep.html#aaf355e8ed90f30563c7a704b7407eb62",
"classAdaptation_1_1Icap_1_1Xaction.html#a935e0d417abcb11a932e20762cc9e200",
"classAdaptation_1_1Iterator.html#a59b16cf530fd8445739638b93397ca15",
"classAdaptation_1_1ServiceFilter.html#ac3fc435d049c90cb85fc32f7fc2d38d0",
"classAnyP_1_1PortCfg.html#a13251c00d03b5a9cb9f3b164f0154969",
"classAppendingStreamBuf.html#aaea19ca0e7249963b04f3a876baf4331",
"classAuth_1_1QueueNode.html#acf68a4ee8204ef802ff7cff03671cf03",
"classBandwidthBucket.html#a8560bce73a5af81c93ee784320a98d6a",
"classBodySink.html#ad615112b4ef56c19ca4931564efacf9c",
"classCapturingStoreEntry.html#a02c542153cc4fee16679702822315137",
"classClassCHostPool.html#a18d0e7a5776cb640f3cfea2396aa8ae1",
"classClientHttpRequest.html#a508820b306e7215b9536f7da545f160a",
"classCommAcceptCbParams.html#a6a391b2345409642778d85f241c5facb",
"classComm_1_1ConnOpener.html#a8c9383cf99505bcfebaca5a1a76e16a5",
"classComm_1_1TcpAcceptor.html#aa50dcdcd8c3ab4a507ec3b2c3abe859a",
"classConnStateData.html#a49bf6c56e934b45073feea54e341c76d",
"classDebugChannel_1_1Logger.html#a377e477a665fd113e25230541b36f3cf",
"classDescriptorSet.html",
"classDiskdAction.html#a318fefc47faa29e35bf7dae2ec5f5347",
"classDns_1_1ConfigRr.html#ae1016dacc3ec7df241aaaef910285cdc",
"classErrorDynamicPageInfo.html#ad4ca4904823cc0122b69ae1b41f59c4a",
"classFadingCounter.html#afba14fc13749c648fd496bacf5f37803",
"classFs_1_1Ufs_1_1StoreFSufs.html#a2e0021b95e00716dcf6cd870fb456203",
"classFs_1_1Ufs_1_1UFSSwapDir.html#a8513d4a5c06801984b85e462d07096dc",
"classFtp_1_1Client.html#a8dc41950c2f440d20577552c02833f07",
"classFtp_1_1Gateway.html#a208fb088e531d5f4df76ce4dc7678f70",
"classFtp_1_1Gateway.html#ab97cb5ceeb63c036ae02a8dbe6527b5c",
"classFtp_1_1Relay.html#a57fd2032538abc7f59a03f3b2aa53767",
"classFtp_1_1Server.html#a03599e863786928346e70b03b3d30031",
"classFtp_1_1Server.html#a73eaed1cdcd71f4611166021f2c13c10",
"classFtp_1_1Server.html#aedb54ea087dba0ed0294345997c8f4d6",
"classHappyOrderEnforcer.html#a15a1bc12879e8d71a960baeb95d978c7",
"classHelper_1_1ReservationId.html#ac1caf3b7ddaa1b97219c36328e9442d1",
"classHttpControlMsgSink.html#ae5fe97274cd2a9b5f0f3da98b46a6479",
"classHttpHeaderEntry.html#a025921b5978511f5aada21dab8a3c0de",
"classHttpRequestMethod.html#a6465c1d07259e449092f3424a2695e47",
"classHttp_1_1ContentLengthInterpreter.html#afe392a8f1fcdffa9271c770b39064f0f",
"classHttp_1_1One_1_1RequestParser.html#a5991757f08347378d1b769735f4c90c2",
"classHttp_1_1One_1_1Server.html#a497c8682cd967de8b087198e08c0dd66",
"classHttp_1_1One_1_1Server.html#ae06c387dd773449597078259a953013b",
"classHttp_1_1Stream.html#a9c000fd8ca836147e8008ba2a5d2b09c",
"classICPState.html#ad39dd636c4d8817fc23946c58892ce41",
"classIp_1_1Address.html#a0b8ac231ebd41158ae4d149bca71f3be",
"classIp_1_1Qos_1_1Config.html#ace3109f2a1be6d5fbf267894ccc3797a",
"classIpc_1_1Coordinator.html#a6e4fb4928b957e95f136fd9f5dc1f533",
"classIpc_1_1Forwarder.html#ad615112b4ef56c19ca4931564efacf9c",
"classIpc_1_1Mem_1_1IdSet.html#a7bd928ed63435dd21c9afeca8293143b",
"classIpc_1_1Mem_1_1Pointer.html#a6f0403d7294a815db0c57cb89d4bc367",
"classIpc_1_1OpenListenerParams.html#a9d952e80c2a12e4c5b85517626a6791b",
"classIpc_1_1Response.html",
"classIpc_1_1StoreMapCleaner.html",
"classIpc_1_1TypedMsgHdr.html#a1b893a6f84c4ba52708c5dcfcc720293",
"classIpc_1_1UdsSender.html#aff483bcf321c5dab3100496b32e6a564",
"classLog_1_1TcpLogger.html#ab2aeb26e0aa5c68ac4bd18d76bba2cde",
"classMemObject_1_1XitTable.html#a0e17326befa39e5cddbf5e149e11c4dd",
"classMem_1_1Meter.html#ad4cd91e8028a67af089d13519d005c1c",
"classMgr_1_1ActionWriter.html#a50740cb80155b366986344512fc196f6",
"classMgr_1_1CountersActionData.html#aff60c3c3e41a8a5445f14b7a6b86c2fd",
"classMgr_1_1IndexAction.html#a18778bf3dffe5fdfbd0537ca6ac22a16",
"classMgr_1_1Inquirer.html#a72616b7d390e5cbfbb8307a011416a52",
"classMgr_1_1IntervalActionData.html#aabfcdf9e5d831d8508e3541e040ca138",
"classMgr_1_1ReconfigureAction.html#a7e55a39d1537397ab6e9d363c40927f1",
"classMgr_1_1StoreIoAction.html#a8ea4bf712a4d89fa4a2f8811cf483e5d",
"classNamedErrorDetail.html#a9ea86ce04de05fa4eeb6d9a4bc11aaab",
"classParser_1_1InsufficientInput.html",
"classPeerSelector.html#ac8130aa167ecf26cf671bbff9070b3fa",
"classProxyProtocol_1_1Header.html#a8bbf8f3849a3b12f9395ad1c18eaee88",
"classRequestFlags.html#abccdcdee48ee6281933ecff24d265b0e",
"classRock_1_1IoState.html#a50249a69ead70aa4d8ca1e78d486ce54",
"classRock_1_1Rebuild.html#a67428ec87a8aa5c402d2b86e1b82fad9",
"classRock_1_1SwapDir.html#a834563bfbfd145324f0d57d9813c5715",
"classSBuf.html#ab42d5d2714baaf0d3d31a3ad6c5d6470",
"classSecurity_1_1BlindPeerConnector.html#a3b7c5aad5132d72c351bf41f3962dd97",
"classSecurity_1_1FuturePeerContext.html",
"classSecurity_1_1LockingPointer.html#ac7336b90bfe0f77fab1f333397de5227",
"classSecurity_1_1PeerOptions.html#a9ad7ceeb51e9e4e9bfa26c1d895207bf",
"classServer.html#a98d67b135b6b75188ae9088769432ea0",
"classSnmp_1_1Inquirer.html#a4ca74d9d723d853833ffff326bbefffb",
"classSnmp_1_1Var.html#a52eac23b01775772b4d424b26bf9ac61",
"classSquidConfig.html#a546d6d5205f5347743b2171e9d965926",
"classSsl_1_1CertValidationMsg.html#a14f38d3be48bab19ab89612f7a0e6165",
"classSsl_1_1CertificateDb.html#af553d10bd1b4d27c77d30eb479cf2289",
"classSsl_1_1ErrorDetailFile.html#ab3fd6108d28be419e25ca3e8b794d376",
"classSsl_1_1IcapPeerConnector.html#ae6b161a1a464ab9da3be40082ccbf2f7",
"classSsl_1_1ServerBio.html#a3297a203c3677420d8d3d016bb31a166",
"classStderrChannel.html#a43dae87198a64f0cc5d0918812324332",
"classStoreIOState.html#a373a95c16906207929a7fea287c38565",
"classStore_1_1Controller.html#ad5cc322884cae7577b6e6f2c9d704f9f",
"classStore_1_1Disks.html#adb7a50531fa407a61f753945b15f4b47",
"classString.html#ada0bb28d00a201f34bbd35edc4a1b3de",
"classTestHttp1Parser.html#affc383a1423118341cc70481856ce5ec",
"classTestSBuf.html#abe23326dd2586e53ed659072d07b7e87",
"classTransients.html#a9af6944e694ff0b5a4759875ba60016a",
"classUnaryMemFunT.html#ab6b5f098453301bdcf77a6bbfb2e2a20",
"classclientReplyContext.html#a23ed47bc9f4ef61b40462fce26657140",
"classgeneric__cbdata.html#ab7014d20f48c384250904dde99623878",
"classnetdbExchangeState.html",
"client__db_8h.html#a959c6ba7ccadf08e5869d8221f3a395e",
"comm_8h.html#ae3d2cd3fb0e90fb602c287a0151696f0",
"dir_974c35a9e5da76de066be5bc9a9208f0.html",
"encrypt_8c.html#a4a0b46669151b60b4ebe377de339ea63",
"ext__edirectory__userip__acl_8cc.html#a6b840c9e5f12bb06676e587558be15b6",
"fs__io_8cc.html#a949d37f97430fdedc9f22dac29fd1e40",
"globals_8h.html#ac944704d7104dd05439f73ea5ff6111e",
"group__FQDNCacheInternal.html#gabe91ce5952a78337cfe54689f28183a7",
"heap_8c.html#a29d3956dd6e06e14b8ea0f7afa7c123b",
"http_8cc.html",
"log__file__daemon_8cc.html#a7e41ab2268b5923a6fb719a6cba9351d",
"mingw_8h.html",
"namespaceFormat.html#a5f11a08efde44e4313dd96e35abda11da356c8cc612f000c430ecf60d4c3f1d80",
"namespaceHttp.html#a432f881deb187c726161d6435daec722a9de2e6ce8c36018c6024b087caf57bb3",
"namespaceIpc.html#aacecc958c899bf05eca864df734b4277",
"namespaceSecurity_1_1Io.html",
"negotiate__sspi__auth_8cc.html#a355be265a7c398eda2c2025849b74739",
"ntlmauth_8h.html#a8e729efaace1807c0446d86f98c3e654a1859657b6325b0524c48ae8220ade01b",
"peer__sourcehash_8cc.html#a1eeddd90f6c3a70752436f1ba7c96809",
"redirect_8cc.html#a4583aaae5554172bd38c1c50f874c6e6",
"security_2Session_8h.html#a83e8ef9c37789c12b7c3bc2cd46a8e98",
"snmp__error_8c.html#ab935c4d5dc51d8193297afd645d3c756",
"ssl_2gadgets_8h.html#a1b19b7b79093fd5800d23a9d8cb8027d",
"store_8cc_source.html",
"structComm_1_1ConnOpener_1_1Calls.html#aae8b6fcf9e2b055c1213aa71394ea5f9",
"structSMBDOMAIN.html#af9c21c527e8ce53923670e86ae361cc6",
"struct__store__check__cachable__hist.html#a8728284f13bfd05251be7f7ecc50b48a",
"structnode.html#aa3e8aa83f864292b5a01210f4453fcc0",
"structwccp2__capability__element__t.html",
"stub__fatal_8cc.html#ab3c37b863f21afba4994007b17bfe27a",
"support__endian_8h.html#a9bea1e76e277f13ae39ac86095510bfa",
"testSBufList_8cc.html#ad2e0b07f75359cf6637393f96deb4739",
"tools_8cc_source.html",
"wccp2_8cc.html#a7d4da8d3c35161e8466a5c9aaca9d46f"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';