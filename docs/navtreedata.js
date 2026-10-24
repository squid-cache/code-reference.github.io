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
"classDescriptorSet.html#a2c82c8cba1801e741aae2ecab3796384",
"classDiskdAction.html#a33bde13a260cd46e0d082a0c7fae537b",
"classDns_1_1ConfigRr.html#ae284a74cdc0ed1e91cc0632a72ed53e3",
"classErrorDynamicPageInfo.html#adeeeb71b8ee5cc50d34e7954bc419b4d",
"classFadingCounter.html#afd4332b4c9a22d0c1483fdf70f1389b1",
"classFs_1_1Ufs_1_1StoreFSufs.html#a2e0021b95e00716dcf6cd870fb456203",
"classFs_1_1Ufs_1_1UFSSwapDir.html#a85e6d594201181d22a10c05ffebb1690",
"classFtp_1_1Client.html#a929f3318c4ffeabb569f66d40c5df5fe",
"classFtp_1_1Gateway.html#a259fd7462ba4c84275dd93b7d253569b",
"classFtp_1_1Gateway.html#abd1705ad8499a9cb9ae1276372dc0601",
"classFtp_1_1Relay.html#a5856203b642eb83926ea80c8a2a6cd25",
"classFtp_1_1Server.html#a040c78bc0d25cd5fb1746dc86f629121",
"classFtp_1_1Server.html#a7443373c03f2b2f3a9846f12105d305b",
"classFtp_1_1Server.html#aeed9af9eac827b0159082d9d923ae340",
"classHappyOrderEnforcer.html#a34379fe63080d9264de4debd1d4e5225",
"classHelper_1_1ReservationId.html#ac1caf3b7ddaa1b97219c36328e9442d1",
"classHttpControlMsgSink.html#aefd101ddca496c1372f282e0f15229b8",
"classHttpHeaderEntry.html#a050d4ae5ab8ecf5cc8619c4e6b5682a5",
"classHttpRequestMethod.html#a6bbbc4d33d262d5502ed8563d7d7a6ca",
"classHttp_1_1HeaderLookupTable__t.html",
"classHttp_1_1One_1_1RequestParser.html#a5bc5f95a7dec51b3032ffcb506208815",
"classHttp_1_1One_1_1Server.html#a49969a02734d2cec84725dc683c180aa",
"classHttp_1_1One_1_1Server.html#ae0ab21b98499a47569207ea2146ebe80",
"classHttp_1_1Stream.html#a9e33e94b1d351ed66069f6773cda1c21",
"classICPState.html#aeee128fe3735cb021348f22fa92132e6",
"classIp_1_1Address.html#a0b8ac231ebd41158ae4d149bca71f3be",
"classIp_1_1Qos_1_1Config.html#ace3109f2a1be6d5fbf267894ccc3797a",
"classIpc_1_1Coordinator.html#a6ebbd87737c976a5d85baf67072fa362",
"classIpc_1_1Forwarder.html#ad813481cd34c5981c5d67b7f4241f47d",
"classIpc_1_1Mem_1_1IdSet.html#a8738ab717e06b35ff1975454d83fb9f4",
"classIpc_1_1Mem_1_1Pointer.html#a8b0c54bf257d99b39dbd756e5c3679e3",
"classIpc_1_1OpenListenerParams.html#adcf2c815802229b3eb187f749902bca1",
"classIpc_1_1Response.html#a08ec88e818064f596715eb0975fb7749",
"classIpc_1_1StoreMapCleaner.html#a0acda49b8c08ed5f19f651cb86140001",
"classIpc_1_1TypedMsgHdr.html#a1bbb38714524e5a89ee64958ca3249c5",
"classJobDialer.html",
"classLog_1_1TcpLogger.html#ab415102f0a6c5dd4969514ef08025dc8",
"classMemObject_1_1XitTable.html#a268ea7fd23160a6bcc9f9ace986dc8be",
"classMem_1_1Meter.html#ad4cd91e8028a67af089d13519d005c1c",
"classMgr_1_1ActionWriter.html#a53f05177c3229ce426f5d6929e48ae8b",
"classMgr_1_1Filler.html",
"classMgr_1_1IndexAction.html#a2165629da741de07af601dd9c50177f3",
"classMgr_1_1Inquirer.html#a7af726feca09818449d04e79ab3d00e3",
"classMgr_1_1IntervalActionData.html#ab783af450890d3a6eee334cef18098e9",
"classMgr_1_1ReconfigureAction.html#ab0a1095605a37e27fe4dee21dd3ce00d",
"classMgr_1_1StoreIoAction.html#ac32322ed65595f6cbe98e230a62e2273",
"classNamedErrorDetail.html#ad139b9d2885bfdef86b333fdcc5e7f0b",
"classParser_1_1InsufficientInput.html",
"classPeerSelector.html#ac84a99a9beff9369d46355626185965b",
"classProxyProtocol_1_1Header.html#a9282db27c4a043eafc88a3769624ea17",
"classRequestFlags.html#acbd8e449ba6d3cc3b181d714a4539f00",
"classRock_1_1IoState.html#a50249a69ead70aa4d8ca1e78d486ce54",
"classRock_1_1Rebuild.html#a67428ec87a8aa5c402d2b86e1b82fad9",
"classRock_1_1SwapDir.html#a84b1d2fce3de55252b2d77d35deb6438",
"classSBuf.html#ab489e62b349e678e32103f5e24de28ea",
"classSecurity_1_1BlindPeerConnector.html#a3b7c5aad5132d72c351bf41f3962dd97",
"classSecurity_1_1FuturePeerContext.html",
"classSecurity_1_1LockingPointer.html#ac7336b90bfe0f77fab1f333397de5227",
"classSecurity_1_1PeerOptions.html#a9ad7ceeb51e9e4e9bfa26c1d895207bf",
"classServer.html#a9cbce101e5899cde000fb625418732ed",
"classSnmp_1_1Inquirer.html#a4ca74d9d723d853833ffff326bbefffb",
"classSnmp_1_1Var.html#a52eac23b01775772b4d424b26bf9ac61",
"classSquidConfig.html#a562d3b9f30cf9f07f338acaf055f14dc",
"classSsl_1_1CertValidationMsg.html#a14f38d3be48bab19ab89612f7a0e6165",
"classSsl_1_1CertificateDb.html#af553d10bd1b4d27c77d30eb479cf2289",
"classSsl_1_1ErrorDetailFile.html#abec814d75ad1bd116ea829d4d6db3818",
"classSsl_1_1IcapPeerConnector.html#aea5074f54c8c5a02bb050882841b1ef3",
"classSsl_1_1ServerBio.html#a353a97453d188fd8807d3ff000d2d971",
"classStderrChannel.html#a47f945b9fe8bfbdaa1f5a947d8d969b1",
"classStoreIOState.html#a405546ca20b5bfb4af78d32536064779",
"classStore_1_1Controller.html#ad5cc322884cae7577b6e6f2c9d704f9f",
"classStore_1_1Disks.html#adb7a50531fa407a61f753945b15f4b47",
"classString.html#adde64e65188ca773161df0995196069f",
"classTestHttpRange.html",
"classTestSBuf.html#ac12f3bf49ba85bcf1c1e0e7171119ec6",
"classTransients.html#a9b952d44a2f364e8ad37047e22806d97",
"classUnaryMemFunT.html#abecc3fa28d41dabafe39335830b3d776",
"classclientReplyContext.html#a2eb1d9b74bda05ccf875d98aab7e276f",
"classhash__link.html",
"classnetdbExchangeState.html#a573ead4b70c720b66aae02b0c7ddcca9",
"client__db_8h.html#ab5559057adc4a68fbd6e36e456db6000",
"comm_8h.html#ae6a51d4c6b647e2aafe2dd412bd5c00d",
"dir_98ab19e9b8b29894e69b7412599e93a2.html",
"encrypt_8c.html#a52aa0f328745b5874b8c88b8faba77e5",
"ext__edirectory__userip__acl_8cc.html#a6e969695ba037c7044e8a73d664cb880",
"fs__io_8cc.html#ac81ba09d0e8223da07f0afcf5c2746f5",
"globals_8h.html#acbcc517d9fc53da8b134cff4d0d4296c",
"group__FQDNCacheInternal.html#gae5ac1f04c0c840373cafb0f98cae03b1",
"heap_8c.html#a2b52c6eb3c2bdd5008df5cff4a8bb08b",
"http_8cc.html#a07ec5e540551c0cd12f07b0659242da9",
"log__file__daemon_8cc.html#aeef6d28b846ca86f97e29a1c72da587a",
"mingw_8h_source.html",
"namespaceFormat.html#a5f11a08efde44e4313dd96e35abda11da3ad28daad8241443426a158e2eaeb77e",
"namespaceHttp.html#a432f881deb187c726161d6435daec722aa140c4f7dc1624466a96d42cc209f155",
"namespaceIpc.html#ab68ef9d5774fe353db8089cfabbad6e2",
"namespaceSecurity_1_1Io.html#a87163bef127542d8faefe3fc1ddbbc72",
"negotiate__sspi__auth_8cc.html#a4be4dc6af156cd21ce6bce224329372d",
"ntlmauth_8h.html#a8e729efaace1807c0446d86f98c3e654a22f32042826eda96c497a87e240fcb89",
"peer__sourcehash_8cc.html#a490540c5ed471161097e29d099757b49",
"redirect_8cc.html#a4f0fc3856daa68331790fc179056e399",
"security_2Session_8h.html#ad2e4c897d0d9fc3d8716915860ca5426",
"snmp__error_8h.html",
"ssl_2gadgets_8h.html#a28721acc2f0f0a8c195c50b20f9b999c",
"store__client_8cc.html#a06631df680fe4de46f305a34874175f9",
"structComm_1_1ConnOpener_1_1Calls.html#ac092d868fbaa99bad45b1c536e92150b",
"structSecurity_1_1PeerOptions_1_1flags__.html#a1cce6e38551086ae28f7a72d879004ed",
"struct__store__check__cachable__hist.html#ad7e503e57ef5462ef518ac74aed1fa8f",
"structpingerEchoData.html#a959a4156d40e956b3daa387bb66b7abe",
"structwccp2__capability__info__header__t.html",
"stub__fd_8cc.html#a77cbbab6aa8dbe35ac16b5d0918ff791",
"support__group_8cc.html",
"testSBuf_8cc.html#a48e20395f35ade3f7e71de69e3a54b4c",
"tools_8h.html#a11605459b73b3fdcfbb0ad8ae23f6d4d",
"wccp2_8cc.html#a86b0a0ad1ddd01870827cdc50b93f620"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';