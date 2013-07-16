package com.thang.test;

import java.io.IOException;

import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.apache.commons.exec.ExecuteException;

public class ExecTest {

	/**
	 * @param args
	 * @throws IOException 
	 * @throws ExecuteException 
	 */
	public static void main(String[] args) throws ExecuteException, IOException {
		// TODO Auto-generated method stub

		CommandLine cmdLine = CommandLine.parse("java -version");
		DefaultExecutor executor = new DefaultExecutor();
		 executor.execute(cmdLine);
	}

}
